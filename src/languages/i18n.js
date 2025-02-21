import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  uz: {
    translation: {
      // !header
      header: {
        nav: {
          main: "ASOSIY",
          news: "YANGILIKLAR",
          courses: "KURSLAR",
          media: "MEDIA",
          location: "MANZILLAR",
        },
        button: "ARIZA TOPSHIRISH",
      },
      //  ! main page
      main: {
        title: "Arxitektura va interyer dizayn kursi",
        cards: {
          card_1: {
            title: "Arxitektura va interyer dizayn kursi",
            description:
              "Arxitektura va interyer dizayn kurslari Mazkur kurslarimiz malakali ustozlarimiz tomonidan olib boriladi va har biri 3 oy davom etadi.",
            button: "Batafsil",
          },
          card_2: {
            title: "3ds Max va AutoCAD",
            description:
              "Kursga 3ds Max va AutoCAD bo‘yicha bosqichma-bosqich o‘qitish kiritilgan. Amaliy mashg‘ulotlar va loyihalar ustida ishlash orqali real tajriba to‘plash imkoniyati mavjud.",
            button: "Batafsil",
          },
        },
      },
      // ! courses about
      courses: {
        course1: {
          title: "Arxitektura va interyer dizayn kursi",
          name: "Arxitektura va interyer dizayn kursi",
          des1: "Kurs haqida batafsil",
          p1: "Arxitektura va interyer dizayn kursi davomida siz binolar, ichki makonlar va ularning bezaklari bo‘yicha asosiy nazariy hamda amaliy bilimlarni egallaysiz. 3D modeling, chizmachilik vainteryer konsepsiyalarni yaratish kabi amaliy mashg‘ulotlar ham o‘tkaziladi",
          p2: "Kursda real loyihalar ustida ishlash imkoniyati mavjud bo‘lib, yakunda o‘z portfoliongizni shakllantirishga yordam beradi.Darslar tajribali mutaxassislar tomonidan olib boriladi.",
          contact: "O'qishga yozilish uchun:",
          phone: "Telefon",
        },

        course2: {
          name: "ARXITEKTURA VA INTERYER DIZAYN KURSI",
          des1: "Kurs haqida batafsil",
          p1: "'Karpageda arxitektura' va interyer dizayni, AutoCAD va 3ds MAX dasturlari kurslari faoliyat olib bormoqda",
          p2: "Ushbu kurslarda ayni damda dunyodagi eng talabgir kasblardan biri - arxitektura va interyer dizayn haqida tushuncha berish, oʼqitish va bilim darajalarini oshirish maqsadida yurtdoshlarimizni oʼquv kurslarimizga oʼqishga taklif etadi.",
          p3: "-Аrxitektura sohasiga oid jahon tajribalari asosidagi mashgʼulotlar;",
          p4: "-Interyer dizayn haqida jahon tajribasi asosida mukammal darslar rejasi; ",
          p5: "-Eng zamonaviy oʼquv dasturlari bilan jihozlangan kompyuter xonalari;",
          p6: "-Professional arxitektor - rassomlardan mahorat darslari.",
          p7: "Oʼqish yakunida sinov imtihonlar oʼtkazilib, bitiruvchilarga tegishli tartibdagi sertifikatlar taqdim etiladi.",
          place: "Manzilimiz: Nukus shahri, Beruniy ko’chasi.",
          phone: "Telefon",
        },
      },

      //  ! about
      contact: {
        more: "Qoshimcha:",
        time: "Davomiyligi:",
        score: "Daraja:",
        numbers: "Tinglovchilar soni:",
        button: "KURSGA YOZILISH",
        hour: "Soat",
      },

      //  ! footer

      footer: {
        first: {
          title: "",
          des1: "«Kar Page» NTM tashkil etishdan asosiy maqsad yurtimiz fuqarolarining bo‘sh vaqtlarini mazmunli tashkil etish va sifatli ta’limni yo‘lga qo‘yishdan iborat.",
          phone: "Telefon",
          place: "Manzil: Nukus shahri, Beruniy ko‘chasi",
        },
        navs: {
          main: "Asosiy",
          news: "Yangiliklar",
          tahlil: "Tahlillar",
          contact: "Bog'lanish",
          admin: "Adminstrator",
          maeket: "Internet do‘kon",
        },
        second: {
          sourses: "IJTIMOIY TARMOQLARDA",
          des: "Bizni ijtimoiy tarmoqlarda kuzatib boring. Eng so‘nggi yangiliklar va e‘lonlardan xabardor bo‘lishingiz mumkin.",
        },
      },
      form: {
        name: "Ismingiz:",
        email: "Elektron pochta:",
        phone: "Telefon raqami:",
        message: "Xabar:",
        submit: "Yuborish",
        submiting: "Yuborilmoqda...",
      },
    },
  },

  ru: {
    translation: {
      // !header
      header: {
        nav: {
          main: "ГЛАВНАЯ",
          news: "НОВОСТИ",
          courses: "КУРСЫ",
          media: "МЕДИА",
          location: "АДРЕСА",
        },
        button: "ПОДАТЬ ЗАЯВКУ",
      },
      //  ! main page
      main: {
        title: "Курс по архитектуре и интерьерному дизайну",
        cards: {
          card_1: {
            title: "Курс по архитектуре и интерьерному дизайну",
            description:
              "Курсы архитектуры и интерьерного дизайна проводятся нашими квалифицированными преподавателями и длятся по 3 месяца каждый.",
            button: "Подробнее",
          },
          card_2: {
            title: "3ds Max и AutoCAD",
            description:
              "Курс включает поэтапное обучение 3ds Max и AutoCAD. Практические занятия и работа над проектами помогут получить реальный опыт.",
            button: "Подробнее",
          },
        },
      },
      // ! courses about
      courses: {
        course1: {
          title: "Курс по архитектуре и интерьерному дизайну",
          name: "Курс по архитектуре и интерьерному дизайну",
          des1: "Подробнее о курсе",
          p1: "В ходе курса вы изучите основные теоретические и практические знания по проектированию зданий, внутреннего пространства и их оформления. Проводятся практические занятия по 3D-моделированию, черчению и созданию интерьерных концепций.",
          p2: "Во время курса есть возможность работать над реальными проектами и создать собственное портфолио. Занятия проводят опытные специалисты.",
          contact: "Для записи на курс:",
          phone: "Телефон",
        },

        course2: {
          name: "КУРС ПО АРХИТЕКТУРЕ И ИНТЕРЬЕРНОМУ ДИЗАЙНУ",
          des1: "Подробнее о курсе",
          p1: "Курсы по архитектуре и интерьерному дизайну, AutoCAD и 3ds MAX активно работают в 'Karpageda'.",
          p2: "Эти курсы предназначены для обучения востребованной профессии архитектора и дизайнера интерьеров, повышения квалификации и приобретения практических знаний.",
          p3: "-Занятия на основе мирового опыта в области архитектуры;",
          p4: "-Идеальный учебный план по интерьерному дизайну, основанный на международных стандартах;",
          p5: "-Современные компьютерные классы с передовым программным обеспечением;",
          p6: "-Мастер-классы от профессиональных архитекторов и дизайнеров.",
          p7: "По окончании курса проводятся экзамены, после которых выпускники получают соответствующие сертификаты.",
          place: "Наш адрес: г. Нукус, улица Беруни.",
          phone: "Телефон",
        },
      },

      //  ! about
      contact: {
        more: "Дополнительно:",
        time: "Продолжительность:",
        score: "Уровень:",
        numbers: "Количество участников:",
        button: "ЗАПИСАТЬСЯ НА КУРС",
        hour: "Часов",
      },

      //  ! footer
      footer: {
        first: {
          title: "",
          des1: "Основная цель НОУ «Kar Page» – организация качественного образования и полезного досуга для граждан нашей страны.",
          phone: "Телефон",
          place: "Адрес: г. Нукус, улица Беруни",
        },
        navs: {
          main: "Главная",
          news: "Новости",
          tahlil: "Анализ",
          contact: "Контакты",
          admin: "Администратор",
          maeket: "Интернет-магазин",
        },
        second: {
          sourses: "СОЦИАЛЬНЫЕ СЕТИ",
          des: "Следите за нами в социальных сетях, чтобы быть в курсе всех новостей и объявлений.",
        },
      },
      form: {
        name: "Ваше имя:",
        email: "Электронная почта:",
        phone: "Номер телефона:",
        message: "Сообщение:",
        submit: "Отправить",
        submiting: "Отправляется...",
      },
    },
  },
  en: {
    translation: {
      // !header
      header: {
        nav: {
          main: "HOME",
          news: "NEWS",
          courses: "COURSES",
          media: "MEDIA",
          location: "LOCATIONS",
        },
        button: "APPLY NOW",
      },
      //  ! main page
      main: {
        title: "Architecture and Interior Design Course",
        cards: {
          card_1: {
            title: "Architecture and Interior Design Course",
            description:
              "Our architecture and interior design courses are conducted by qualified instructors and each lasts for 3 months.",
            button: "Read More",
          },
          card_2: {
            title: "3ds Max and AutoCAD",
            description:
              "The course includes step-by-step training in 3ds Max and AutoCAD. Hands-on practice and project work will help you gain real experience.",
            button: "Read More",
          },
        },
      },
      // ! courses about
      courses: {
        course1: {
          title: "Architecture and Interior Design Course",
          name: "Architecture and Interior Design Course",
          des1: "Course Details",
          p1: "Throughout this course, you will acquire fundamental theoretical and practical knowledge about building design, interior spaces, and their decorations. Practical sessions include 3D modeling, drafting, and creating interior concepts.",
          p2: "You will have the opportunity to work on real projects and build your own portfolio. The classes are conducted by experienced professionals.",
          contact: "To enroll:",
          phone: "Phone",
        },

        course2: {
          name: "ARCHITECTURE AND INTERIOR DESIGN COURSE",
          des1: "Course Details",
          p1: "At 'Karpageda', courses on architecture, interior design, AutoCAD, and 3ds MAX are actively conducted.",
          p2: "These courses are designed to provide knowledge about one of the most in-demand professions—architecture and interior design—offering training and skill enhancement for our students.",
          p3: "-Lessons based on global experience in architecture;",
          p4: "-A comprehensive curriculum on interior design based on international standards;",
          p5: "-Modern computer labs equipped with the latest educational software;",
          p6: "-Masterclasses from professional architects and designers.",
          p7: "At the end of the course, final exams are conducted, and graduates receive official certificates.",
          place: "Our address: Nukus city, Beruniy street.",
          phone: "Phone",
        },
      },

      //  ! about
      contact: {
        more: "Additional Info:",
        time: "Duration:",
        score: "Level:",
        numbers: "Number of Participants:",
        button: "ENROLL IN COURSE",
        hour: "Hours",
      },

      //  ! footer
      footer: {
        first: {
          title: "",
          des1: "The main goal of 'Kar Page' is to organize high-quality education and meaningful leisure activities for our citizens.",
          phone: "Phone",
          place: "Address: Nukus city, Beruniy street",
        },
        navs: {
          main: "Home",
          news: "News",
          tahlil: "Analysis",
          contact: "Contact",
          admin: "Administrator",
          maeket: "Online Store",
        },
        second: {
          sourses: "FOLLOW US ON SOCIAL MEDIA",
          des: "Follow us on social media to stay updated on the latest news and announcements.",
        },
      },
      form: {
        name: "Your Name:",
        email: "Email:",
        phone: "Phone Number:",
        message: "Message:",
        submit: "Submit",
        submiting: "Submitting...",
      },
    },
  },

  kr: {
    translation: {
      header: {
        nav: {
          main: "BAS BET",
          news: "JAŃALIQLAR",
          courses: "KURSILAR",
          media: "MEDIA",
          location: "MEKEN-JAYLAR",
        },
        button: "QA’BIL ETİW",
      },
      main: {
        title: "Arxitekturá hám interyer dizayn kursi",
        cards: {
          card_1: {
            title: "Arxitekturá hám interyer dizayn kursi",
            description:
              "Arxitekturá hám interyer dizayn kursi boyınsha bizdiń tajiriybeli oqıtıwshılarımız tárepinen ótkiziledi hám hár biri 3 ay dawam etedi.",
            button: "Tolıǵıraq",
          },
          card_2: {
            title: "3ds Max hám AutoCAD",
            description:
              "Bul kurs 3ds Max hám AutoCAD-dı úyreniwdi qalewshiler,arxitektura ham qurilis tarawi studentleri ushin arnalgan. Tásirlik práctika hám layihalardı orınlaw sizge shınayı tájiriybe beredi.",
            button: "Tolıǵıraq",
          },
        },
      },
      courses: {
        course1: {
          title: "Arxitekturá hám interyer dizayn kursi",
          name: "Arxitekturá hám interyer dizayn kursi",
          des1: "Kurs Haqqında",
          p1: "Bul kurs arqalı siz imarattardı loyihalaw, ishki jay dizaynı hám onı bezew boyınsha negizgi teoriyalıq hám práctikalıq bılimge iye bolasız. Práctikalıq sabaqlar 3D modellew, sızba jasaw hám ishki dizayn konsepsiyaların ámelge asıradı.",
          p2: "Siz shınayı layihalar menen jumıs jasaw hám óz portfoliongızdı qurıw imkaniyatına iye bolasız. Sabalar tájiriybeli profesionallar tárepinen ótkiziledi.",
          contact: "Kursqa jazılıw ushın:",
          phone: "Telefon",
        },
        course2: {
          name: "ARXITEKTURÁ HÁM İNTERYER DIZAYN KURSI",
          des1: "Kurs haqqında",
          p1: "'Karpageda' da arxitekturá, ishki dizayn, AutoCAD hám 3ds MAX boyınsha kurslar belsendi ótkiziledi.",
          p2: "Bul kurslar eng kóp talap etiletin mamandıqlardı úyreniw ushın rawajlandırılǵan hám oqıwshılar ushın bilim hám tájiriybe beredi.",
          p3 : "-Arxitektura tarawına tiyisli jáhán tájiriybeleri tiykarındaǵı shınıǵıwlar ;",
          p4 : "-Interyer dizayn haqqında jáhán tájiriybesi tiykarında jetilisken sabaqlar jobası ;",
          p5 : "-Eń zamanagóy oqıw programmaları menen úskenelestirilgen kompyuter bólmeleri;",
          p6 : "-Professional arxitektor - súwretshilerden uqıp sabaqları.",
          p7 : "Oqıw juwmaǵında sınaq imtixanlar ótkerilip, pitkeriwshilerge tiyisli tártipdegi sertifikatlar usınıs etiledi.",
          place: "Bizdiń manzilimiz-: No'kis qalası, Beruniy kóshesi.",
          phone: "Telefon",
        },
      },
      contact: {
        more: "Kópshe málimat:",
        time: "Uzaqlığı:",
        score: "Dárejesi:",
        numbers: "Qatnasıwshılar sanı:",
        button: "KURSQA JAZILIW",
        hour: "Saǵat",
      },
      footer: {
        first: {
          des1: "'Kar Page' negizgi maqseti – elimiz adamlarına sapalı bilim hám tiykar emek wáqıtın tiyarlı uyıymlastırıw.",
          phone: "Telefon",
          place: "Meken-jay: No'kis qalası, Beruniy kóshesi",
        },
        navs: {
          main: "Bas bet",
          news: "Jańalıqlar",
          contact: "Bailanıw",
          tahlil: "Talil",
          admin: "Ádministrátor",
          maeket: "Online Dükán",
        },
        second: {
          sourses: "ÁLEUMETLIK JELILERGE TIRKELIW",
          des: "Sońǵı jańalıqlardan hám habarlandırıwlardan habarlanıw ushın áleumetlik jelilerde biz menen bolıń!",
        },
      },
      form: {
        name: "Atingız:",
        email: "Email:",
        phone: "Telefon nomeri:",
        message: "Habarlasıw:",
        submit: "Jiberiw",
        submiting: "Jiberilmekte...",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
