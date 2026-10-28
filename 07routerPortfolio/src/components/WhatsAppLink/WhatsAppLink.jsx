import React from 'react'

const whatsappNumber = '917999931469'
const whatsappMessage = 'Hi Gautam, I found your portfolio and would like to connect.'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2.25a9.73 9.73 0 0 0-8.42 14.6L2.3 21.7l5.02-1.25A9.74 9.74 0 1 0 12 2.25Zm0 17.76a8 8 0 0 1-4.08-1.12l-.29-.17-2.98.74.79-2.9-.19-.3A8 8 0 1 1 12 20.01Z" />
      <path fill="currentColor" d="M16.4 13.95c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18a7.1 7.1 0 0 1-1.32-1.64c-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.3-.75-1.78-.2-.47-.4-.4-.55-.4h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.36.52.57.18 1.09.16 1.5.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function WhatsAppLink({ compact = false }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gautam on WhatsApp"
      className={compact
        ? 'inline-flex min-h-11 items-center gap-2 font-medium text-slate-300 transition hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-emerald-300'
        : 'portfolio-card group flex min-h-11 items-center gap-4 p-5 transition hover:border-emerald-400/60 focus-visible:outline-2 focus-visible:outline-emerald-300'}
    >
      <span className={compact ? 'text-emerald-300' : 'flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/10 text-emerald-300'}><WhatsAppIcon /></span>
      <span className={compact ? '' : 'block'}>
        {!compact && <span className="block text-sm text-slate-400">WhatsApp</span>}
        <span className={compact ? '' : 'mt-1 block font-semibold text-emerald-300'}>{compact ? 'WhatsApp' : 'Chat on WhatsApp'}</span>
      </span>
    </a>
  )
}

export default WhatsAppLink