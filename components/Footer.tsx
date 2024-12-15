import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer(){
  return(
    <div className={styles.footer}>
      <div>
        <Image 
          src={'/lisa-footer.svg'}
          height={200}
          width={300}
          alt=""
        />
      </div>
      <div className={styles.footer__links}>
        <p>@estatecorp</p>
        <p>estate@email.com</p>
      </div>
    </div>
  )
}