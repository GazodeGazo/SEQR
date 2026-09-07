import { CONTRACTS } from '../../config/contracts'

export default function PrelaunchBanner() {
  // Affiche la bannière seulement quand IS_LIVE est false (mode prelaunch)
  if (CONTRACTS.IS_LIVE) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[#00C805] text-black text-center py-2 text-sm">
      SEQR Protocol launching soon — <a 
        href="https://x.com/SeqrOnRH" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline font-medium hover:no-underline"
      >
        Follow us for updates
      </a>
    </div>
  )
}
