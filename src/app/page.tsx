'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header";
import './../../styles/font.css';
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>

      <main>
        <section className={styles.heading}>
          <div className={styles.heading__h}>
            <h1>Л.И.С.А</h1>
            <Image
              src={'/left-icon.svg'}
              width={260}
              height={260}
              alt=""
              className={styles.heading__image}
            />
          </div>
          <div className={styles.heading__b}>
            <Image
              src={'/heading-swipe.svg'}
              width={1800}
              height={100}
              alt=""
              className={styles.no__drag}
            />
          </div>
        </section>

        <section className={styles.grid__qr}>
          <div>
            <Image
              src={'/grid-qr.svg'}
              width={920}
              height={550}
              alt=""
              className={styles.no__drag}
            />
            <a href="#">УЗНАТЬ БОЛЬШЕ</a>
            <p>локальная индивидуальная система администрирования</p>
          </div>
          <div>
            <Image
              src={'/image-house.svg'}
              width={840}
              height={537}
              alt=""
              className={styles.roundedImage}
            />
          </div>
        </section>

        <section className={styles.details}>
          <div>
            <div className={styles.details__h}>
              <h1>детали</h1>
              <Image
                src={'/hvost.svg'}
                width={270}
                height={270}
                alt=""
                className={styles.details__image}
              />
            </div>
            <div className={styles.details__grid}>
              <Image
                src={'/details-kvar.svg'}
                width={820}
                height={580}
                alt=""
                className={styles.image__appart}
              />
              <div className={styles.grid__block}>
                <p className={styles.block__p}>Вся аналитика больших данных в невероятно компактном решении</p>
                <div className={styles.block__grid}>
                  <Image
                    src={'/details-grid.svg'}
                    width={920}
                    height={280}
                    alt=""
                    className={styles.no__drag}
                  />
                  <p className={styles.overlay__text}>Управляй ресурсами эффективно 
                  с нашей систeмой умного мониторинга. Прозрачная аналитика в каждом доме.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.functional}>
          <div className={styles.container}>
            <div className={styles.functional__block}>
              <h1>функционал</h1>
              <div className={styles.functional__bg}>
                <div>
                  <Image 
                    src={'/functional-image.svg'}
                    width={700}
                    height={700}
                    alt=""
                    className={styles.functional__image}
                  />
                </div>
                <div className={styles.functional__block2}>
                  <div className={styles.block2__union}>
                    <Image 
                      src={'/union1.svg'}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className={styles.union__text}>
                      <h3 className={styles.union__h}>Доступ к камерам</h3>
                      <p className={styles.union__p}>Следите за безопасностью с любого устройства</p>
                    </div>
                  </div>
                  <div className={styles.block2__union}>
                    <Image 
                      src={'/union2.svg'}
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className={styles.union__text}>
                      <h3 className={styles.union__h}>Простота использования</h3>
                      <p className={styles.union__p}>Системой удобно пользоваться любому человеку благодаря геймификации</p>
                    </div>
                  </div>
                  <div className={styles.block2__union}>
                    <Image 
                      src={'/union3.svg'}
                      width={60}
                      height={60}
                      alt=""
                      
                    />
                    <div className={styles.union__text}>
                      <h3 className={styles.union__h}>Подсчет эгнергии</h3>
                      <p className={styles.union__p}>Системой удобно пользоваться любому человеку благодаря геймификации</p>
                    </div>
                  </div>
                  <div className={styles.block2__union}>
                    <Image 
                      src={'/union4.svg'}
                      width={60}
                      height={60}
                      alt=""
                      
                    />
                    <div className={styles.union__text}>
                      <h3 className={styles.union__h}>Безопасность</h3>
                      <p className={styles.union__p}>Все данные хранящиеся на сервере шифруются</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.application}>
          <div>
            <div className={styles.application__h}>
              <h1>оставить заявку</h1>
              <Image
                src={'/vector.svg'}
                width={350}
                height={240}
                alt=""
                className={styles.application__image}
              />
            </div>
            <div className={styles.application__block}>
              <div className={styles.application__form}>
                <Form />
              </div>
              <div className={styles.application__grid}>
                <div className={styles.application__text}>
                  <div>
                    <h2>Консультация по вашему проекту</h2>
                    <Image 
                      src={'/lisa-grid-vector.svg'}
                      width={400}
                      height={50}
                      alt="vector"

                    />
                  </div>
                  <div>
                    <p>Наши менеджеры оперативно свяжутся с вами в Telegram, ответят на все ваши вопросы и предоставят максимально подробную консультацию</p>
                  </div>
                </div>
                <div>
                  <Image 
                    src={'/lisa-grid.svg'}
                    width={850}
                    height={486}
                    alt="vector"
                    className={styles.application__image}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
