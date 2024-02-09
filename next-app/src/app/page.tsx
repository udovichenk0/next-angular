'use client'
import { useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const ref = useRef<any>(null)
  return (
    <div className={styles.main} ref={ref}>
      hello from nextjs
      <button onClick={() => {
        // hiding next page
        ref.current.style.display = 'none'
        //@ts-ignore
        //showing showing angular page
        document.getElementsByTagName('app-root')[0].style.display = 'block'
        // we should load polyfill.js before main js, otherwise it gets an error!
        history.pushState({}, "", "/find-room")
        //on button click we should inject these scripts
        const poly = document.createElement('script');
        poly.src = '/polyfills.js';
        poly.type = 'module';
        document.body.appendChild(poly);

        const main = document.createElement('script');
        main.src = '/main.js';
        main.type = 'module';
        document.body.appendChild(main);
        
      }}>Get matched</button>
    </div>
  );
}
