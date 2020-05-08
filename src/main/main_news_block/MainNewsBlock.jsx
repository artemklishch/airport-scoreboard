import React from 'react';
import { Link } from 'react-router-dom';

const MainNewsBlock = () => {
  return (
    <section className="mainNewsBlock">

      <hr />

      <div className="mainNewsBlock__top">
        <h2 className="mainNewsBlock__title">News feed</h2>
        <button className="mainNewsBlock__btn-news">Other news</button>
      </div>

      <div className="mainNewsBlock__articles">
        <aside className="mainNewsBlock__articles_left">
          <article className="mainNewsBlock__articles_top-new">
            <Link to='/' className="mainNewsBlock__articles_link">
              <span className="mainNewsBlock__articles_date-new">03/03/2020</span>
              <h3 className="mainNewsBlock__articles_new-title">Статистика Международного аэропорта «Киев». Февраль </h3>
              <img className="mainNewsBlock__articles_new-img" src="https://api.iev.aero/media/blog/files/5e5e6cf8e7425935950647.jpg" alt="airplane" />
              <p className="mainNewsBlock__articles_text">За февраль 2020 года Международный аэропорт «Киев» им. Игоря Сикорского обслужил 159,6 тыс. пассажиров, что на 13,8% меньше, чем в феврале 2019. Количество пассажиров, обслуженных на международных рейсах – 157,6 тыс., на внутренних рейсах – 2,0 тыс. пассажиров.</p>
              <p className="mainNewsBlock__articles_text">Количество рейсов в феврале 2020 года составило 1 796 на прилет и вылет, что на 10,5% меньше аналогичного периода 2019 г., из них международных рейсов – 1 519, внутренних – 277.</p>
              <p className="mainNewsBlock__articles_text">Наиболее популярные международные направления в феврале 2020 года – Минск (Беларусь), Варшава (Польша), Вена (Австрия), Берлин (Германия), Мемминген (Германия), Таллин (Эстония); внутренние – Запорожье, Днепропетровск, Одесса.</p>
            </Link>
          </article>
        </aside>

        <aside className="mainNewsBlock__articles_right">
          <article className="mainNewsBlock__articles_new">
            <Link to='/'className="mainNewsBlock__articles_link">
              <span className="mainNewsBlock__articles_top-new">03/03/2020</span>
              <h3 className="mainNewsBlock__articles_new-title">"Жулянский узник" или история о том, как Ан-12В не успел вылететь </h3>
              <p className="mainNewsBlock__articles_text">В 2008 году в аэропорту «Киев» проводили полную реконструкцию и удлинение взлетно-посадочной полосы. Это позволило аэропорту принимать среднемагистральные авиалайнеры семейства Boeing 737 и Airbus A320.</p>
              <p className="mainNewsBlock__articles_text">На момент закрытия аэропорта самолеты всех авиакомпаний улетели на другие аэродромы. Только один самолет задержался и остался на аэродроме на несколько месяцев, не имея возможности вылететь хоть куда-нибудь.</p>
              <p className="mainNewsBlock__articles_text">Тогда-то грузовой самолет Ан-12В и получил прозвище «Жулянский узник».</p>
            </Link>
          </article>

          <article className="mainNewsBlock__articles_new">
            <Link to='/' className="mainNewsBlock__articles_link">
              <span className="mainNewsBlock__articles_date-new">03/03/2020</span>
              <h3 className="mainNewsBlock__articles_new-title">Обзор международных авиационных новостей на 3.03.2020</h3>
              <p className="mainNewsBlock__articles_text">Италия подождет;</p>
              <p className="mainNewsBlock__articles_text">Турция приостанавливает авиасообщение с Италией;</p>
              <p className="mainNewsBlock__articles_text">Голубиный беспредел по-индийски;</p>
              <p className="mainNewsBlock__articles_text">Вулкан Эбеко на острове Парамушир выбросил столб пепла на высоту 1,8 км;</p>
              <p className="mainNewsBlock__articles_text">Бесславный финал турецкого борта;</p>
              <p className="mainNewsBlock__articles_text">Легендарная миссия на Луну все еще со множеством вопросов ;</p>
            </Link>
          </article>
        </aside>
      </div>

      <hr />
    </section>
  );
};
export default MainNewsBlock;