import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from '@/components/sections/ContactSection'
import { Toaster } from '@/components/ui/toaster'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() }
}))

import emailjs from '@emailjs/browser'

const renderContactSection = () =>
  render(
    <>
      <Toaster />
      <ContactSection />
    </>
  )

describe('ContactSection', () => {
  beforeEach(() => {
    vi.mocked(emailjs.send).mockReset()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('shows a validation toast and does not call EmailJS when fields are empty', async () => {
    const { container } = renderContactSection()

    const form = container.querySelector('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form as HTMLFormElement)

    expect(
      await screen.findByText('Please complete all fields')
    ).toBeInTheDocument()
    expect(emailjs.send).not.toHaveBeenCalled()
  })

  it('sends the message and shows a success toast when the form is filled in', async () => {
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test')
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test')
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test')
    vi.mocked(emailjs.send).mockResolvedValueOnce({} as never)

    const user = userEvent.setup()
    renderContactSection()

    await user.type(screen.getByLabelText(/your name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/your email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/your message/i), 'Hello there!')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(
      await screen.findByText('Message sent successfully!')
    ).toBeInTheDocument()
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_test',
      'template_test',
      expect.objectContaining({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Hello there!'
      }),
      'public_test'
    )
  })
})
