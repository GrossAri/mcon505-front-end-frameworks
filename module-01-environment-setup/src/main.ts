import './style.css'
import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1>Module 1 Verification</h1>
    <p><strong>Name:</strong> Ari Gross</p>
    <p><strong>Course:</strong> MCON 505</p>
    <p><strong>Date:</strong> October 21, 2026</p>
    <p><strong>Node.js version:</strong> v24.13.0</p>
    <p><strong>Confirmation:</strong> My TypeScript environment is running successfully.</p>
  </main>


<div class="ticks"></div>



<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
