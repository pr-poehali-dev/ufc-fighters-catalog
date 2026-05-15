import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/21e0c350-313f-4193-b546-642a7bdcdfae/files/02c87099-6ae5-41bf-9ca5-9b80d84fda80.jpg';
const FIGHTER1_IMG = 'https://cdn.poehali.dev/projects/21e0c350-313f-4193-b546-642a7bdcdfae/files/770f3aa2-b1db-4889-a967-c0b581a500cd.jpg';
const FIGHTER2_IMG = 'https://cdn.poehali.dev/projects/21e0c350-313f-4193-b546-642a7bdcdfae/files/284f417e-ce07-4f51-9d02-3db10bc29f8b.jpg';

const fighters = [
  {
    id: 1,
    name: 'Ислам Махачев',
    nickname: '"The Machine"',
    weightClass: 'Лёгкий вес',
    record: { wins: 27, losses: 1, draws: 0 },
    nationality: '🇷🇺 Дагестан, Россия',
    age: 32,
    height: '175 см',
    weight: '70 кг',
    reach: '178 см',
    stance: 'Ортодокс',
    bio: 'Ислам Махачев — действующий чемпион UFC в лёгком весе и один из лучших бойцов мира в фунт-за-фунт рейтинге. Уроженец Махачкалы, Дагестан. Тренируется в команде AKA под руководством Хавьера Мендеса. Обладает исключительным борцовским фундаментом и гроссмейстерским грэпплингом. Друг и партнёр по тренировкам Хабиба Нурмагомедова. Завоевал пояс UFC в 2022 году, победив Чарлза Оливейру.',
    wins_by: { ko: 4, sub: 12, dec: 11 },
    losses_by: { ko: 0, sub: 0, dec: 1 },
    img: FIGHTER1_IMG,
    rank: 1,
    status: 'Чемпион UFC · Лёгкий вес',
    videos: [
      { title: 'Islam Makhachev vs Charles Oliveira — UFC 280', date: '22 Окт 2022', duration: '10:00' },
      { title: 'Islam Makhachev vs Alexander Volkanovski — UFC 284', date: '11 Фев 2023', duration: '25:00' },
      { title: 'Лучшие моменты карьеры Ислама Махачева', date: '2024', duration: '8:14' },
    ],
  },
  {
    id: 2,
    name: 'Хабиб Нурмагомедов',
    nickname: '"The Eagle"',
    weightClass: 'Лёгкий вес',
    record: { wins: 29, losses: 0, draws: 0 },
    nationality: '🇷🇺 Дагестан, Россия',
    age: 35,
    height: '178 см',
    weight: '70 кг',
    reach: '178 см',
    stance: 'Ортодокс',
    bio: 'Хабиб Нурмагомедов — величайший чемпион UFC в лёгком весе, завершивший карьеру непобеждённым (29-0). Уроженец Кировского аула, Дагестан. Борцовская легенда, доминировавшая над соперниками за счёт невероятного давления и грэпплинга. Победил Конора МакГрегора, Джастина Гэтжи и Дасти Порье. В октябре 2020 года объявил о завершении карьеры после смерти отца.',
    wins_by: { ko: 8, sub: 11, dec: 10 },
    losses_by: { ko: 0, sub: 0, dec: 0 },
    img: FIGHTER2_IMG,
    rank: 0,
    status: 'Легенда UFC · Непобеждённый',
    videos: [
      { title: 'Khabib vs Conor McGregor — UFC 229', date: '6 Окт 2018', duration: '16:05' },
      { title: 'Khabib vs Justin Gaethje — UFC 254', date: '24 Окт 2020', duration: '10:10' },
      { title: 'Все победы Хабиба в UFC', date: '2020', duration: '45:00' },
    ],
  },
  {
    id: 3,
    name: 'Пётр Ян',
    nickname: '"No Mercy"',
    weightClass: 'Лёгчайший вес',
    record: { wins: 17, losses: 5, draws: 0 },
    nationality: '🇷🇺 Новосибирск, Россия',
    age: 31,
    height: '170 см',
    weight: '61 кг',
    reach: '170 см',
    stance: 'Ортодокс',
    bio: 'Пётр Ян — один из лучших бойцов лёгчайшего веса в мире. Уроженец Новосибирска. Экс-чемпион UFC в лёгчайшем весе (2020–2021). Известен разрушительными руками и хладнокровием в бою. Бывший интерим-чемпион. Боец мирового класса с победами над Алджамэйном Стерлингом, Коди Гарбрандтом и Хосе Альдо.',
    wins_by: { ko: 10, sub: 2, dec: 5 },
    losses_by: { ko: 1, sub: 1, dec: 3 },
    img: FIGHTER1_IMG,
    rank: 3,
    status: 'Экс-чемпион UFC · Лёгчайший вес',
    videos: [
      { title: 'Petr Yan vs Jose Aldo — UFC 251', date: '11 Июл 2020', duration: '18:00' },
      { title: 'Petr Yan vs Cody Garbrandt — UFC 273', date: '9 Апр 2022', duration: '5:00' },
    ],
  },
  {
    id: 4,
    name: 'Зубайра Тухугов',
    nickname: '"The Chechen Eagle"',
    weightClass: 'Лёгкий вес',
    record: { wins: 20, losses: 4, draws: 0 },
    nationality: '🇷🇺 Чечня, Россия',
    age: 33,
    height: '178 см',
    weight: '70 кг',
    reach: '183 см',
    stance: 'Ортодокс',
    bio: 'Зубайра Тухугов — чеченский боец UFC, тренирующийся в команде Хабиба Нурмагомедова. Известен агрессивным стилем и мощными ударами. Участник UFC Fight Night и UFC on ESPN. Представляет Чеченскую Республику на мировой арене смешанных единоборств.',
    wins_by: { ko: 9, sub: 5, dec: 6 },
    losses_by: { ko: 1, sub: 0, dec: 3 },
    img: FIGHTER2_IMG,
    rank: 12,
    status: 'Боец UFC · Лёгкий вес',
    videos: [
      { title: 'Zubaira Tukhugov Highlights 2023', date: '2023', duration: '5:30' },
    ],
  },
  {
    id: 5,
    name: 'Умар Нурмагомедов',
    nickname: '"The Untouchable"',
    weightClass: 'Лёгчайший вес',
    record: { wins: 18, losses: 0, draws: 0 },
    nationality: '🇷🇺 Дагестан, Россия',
    age: 27,
    height: '170 см',
    weight: '61 кг',
    reach: '173 см',
    stance: 'Ортодокс',
    bio: 'Умар Нурмагомедов — двоюродный брат Хабиба и один из самых перспективных бойцов UFC. Непобеждённый профессионал с 18 победами подряд. Обладает семейной борцовской школой и совмещает её с жёсткими ударами. Быстро движется к титулу в лёгчайшем весе.',
    wins_by: { ko: 5, sub: 8, dec: 5 },
    losses_by: { ko: 0, sub: 0, dec: 0 },
    img: FIGHTER1_IMG,
    rank: 4,
    status: 'Претендент · Лёгчайший вес',
    videos: [
      { title: 'Umar Nurmagomedov vs Cody Stamann', date: '2022', duration: '7:00' },
      { title: 'Umar Nurmagomedov Highlights 2024', date: '2024', duration: '6:15' },
    ],
  },
  {
    id: 6,
    name: 'Магомед Анкалаев',
    nickname: '"Ankalaev"',
    weightClass: 'Полутяжёлый вес',
    record: { wins: 20, losses: 1, draws: 1 },
    nationality: '🇷🇺 Дагестан, Россия',
    age: 31,
    height: '188 см',
    weight: '93 кг',
    reach: '193 см',
    stance: 'Ортодокс',
    bio: 'Магомед Анкалаев — дагестанский боец UFC, претендент на чемпионский пояс в полутяжёлом весе. Мощный и технически оснащённый боец с сокрушительным нокаутирующим ударом. Сыграл вничью с Яном Блахович в бою за вакантный титул в 2022 году. Один из лучших в своём дивизионе.',
    wins_by: { ko: 11, sub: 3, dec: 6 },
    losses_by: { ko: 1, sub: 0, dec: 0 },
    img: FIGHTER2_IMG,
    rank: 2,
    status: 'Претендент #1 · Полутяжёлый вес',
    videos: [
      { title: 'Ankalaev vs Blachowicz — UFC 282 (Title Fight)', date: '10 Дек 2022', duration: '25:00' },
      { title: 'Magomed Ankalaev Highlights 2023', date: '2023', duration: '7:45' },
    ],
  },
  {
    id: 7,
    name: 'Алибек Дзиттинов',
    nickname: '"Lion Heart"',
    weightClass: 'Средний вес',
    record: { wins: 14, losses: 0, draws: 0 },
    nationality: '🇷🇺 Чечня, Россия',
    age: 26,
    height: '183 см',
    weight: '84 кг',
    reach: '190 см',
    stance: 'Ортодокс',
    bio: 'Алибек Дзиттинов — непобеждённый чеченский боец UFC в среднем весе. Ворвался в организацию как один из самых талантливых молодых бойцов. Побеждает оппонентов сочетанием мощной борьбы и точных ударов. Имя Дзиттинова уже связывают с будущим чемпионством.',
    wins_by: { ko: 6, sub: 5, dec: 3 },
    losses_by: { ko: 0, sub: 0, dec: 0 },
    img: FIGHTER1_IMG,
    rank: 8,
    status: 'Боец UFC · Средний вес',
    videos: [
      { title: 'Alibek Dzitiev Highlights 2024', date: '2024', duration: '5:00' },
    ],
  },
  {
    id: 8,
    name: 'Максим Гришин',
    nickname: '"Max"',
    weightClass: 'Полутяжёлый вес',
    record: { wins: 27, losses: 9, draws: 1 },
    nationality: '🇷🇺 Москва, Россия',
    age: 40,
    height: '185 см',
    weight: '93 кг',
    reach: '193 см',
    stance: 'Ортодокс',
    bio: 'Максим Гришин — ветеран ММА из Москвы с более чем 15-летней карьерой. Прошёл путь через множество организаций и добрался до UFC. Знаменит жёсткими лоу-киками и разнообразным арсеналом техник. Бойцовская легенда российского ММА.',
    wins_by: { ko: 12, sub: 6, dec: 9 },
    losses_by: { ko: 4, sub: 1, dec: 4 },
    img: FIGHTER2_IMG,
    rank: 15,
    status: 'Ветеран UFC · Полутяжёлый вес',
    videos: [
      { title: 'Maxim Grishin vs Ion Cutelaba — UFC Fight Night', date: '2021', duration: '12:30' },
    ],
  },
];

const news = [
  {
    id: 1,
    title: 'Ислам Махачев успешно защитил пояс UFC против Дастина Порье',
    date: '12 апр 2025',
    category: 'Результаты',
    excerpt: 'Дагестанский чемпион в очередной раз подтвердил статус лучшего бойца мира, доминировав пять раундов и победив решением судей.',
    img: HERO_IMG,
  },
  {
    id: 2,
    title: 'Умар Нурмагомедов — следующий претендент на титул в лёгчайшем весе?',
    date: '5 апр 2025',
    category: 'Анализ',
    excerpt: 'После 18 побед подряд UFC должны поставить Умара в бой за пояс. Эксперты обсуждают возможное противостояние с Шоном О\'Мэлли.',
    img: FIGHTER1_IMG,
  },
  {
    id: 3,
    title: 'Магомед Анкалаев возвращается — бой назначен на лето 2025',
    date: '28 мар 2025',
    category: 'Анонсы',
    excerpt: 'Дагестанский претендент #1 полутяжёлого веса выйдет на октагон после годичного перерыва. Соперник пока не объявлен.',
    img: FIGHTER2_IMG,
  },
];

const galleryImages = [
  { id: 1, img: HERO_IMG, caption: 'UFC — Арена чемпионов' },
  { id: 2, img: FIGHTER1_IMG, caption: 'Ислам Махачев — тренировочный лагерь' },
  { id: 3, img: FIGHTER2_IMG, caption: 'Хабиб Нурмагомедов — легенда UFC' },
  { id: 4, img: HERO_IMG, caption: 'UFC Октагон — место легенд' },
  { id: 5, img: FIGHTER1_IMG, caption: 'Пётр Ян — взвешивание' },
  { id: 6, img: FIGHTER2_IMG, caption: 'Анкалаев — пресс-конференция' },
];

const weightClasses = ['Все категории', 'Лёгкий вес', 'Лёгчайший вес', 'Средний вес', 'Полутяжёлый вес'];

type Section = 'home' | 'fighters' | 'stats' | 'news' | 'gallery';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [selectedFighter, setSelectedFighter] = useState<typeof fighters[0] | null>(null);
  const [weightFilter, setWeightFilter] = useState('Все категории');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<typeof galleryImages[0] | null>(null);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Главная' },
    { id: 'fighters', label: 'Бойцы' },
    { id: 'stats', label: 'Статистика' },
    { id: 'news', label: 'Новости' },
    { id: 'gallery', label: 'Галерея' },
  ];

  const filteredFighters = weightFilter === 'Все категории'
    ? fighters
    : fighters.filter(f => f.weightClass === weightFilter);

  const navigate = (section: Section) => {
    setActiveSection(section);
    setSelectedFighter(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#c0392b]/30">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => navigate('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#c0392b] flex items-center justify-center">
              <span className="font-oswald font-bold text-white text-sm">UFC</span>
            </div>
            <span className="font-oswald font-bold text-xl tracking-widest text-white group-hover:text-[#e74c3c] transition-colors">
              UFC · РУС БОЙЦЫ
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-4 py-2 font-roboto-condensed font-bold text-sm tracking-widest uppercase transition-all ${
                  activeSection === item.id
                    ? 'text-[#e74c3c] border-b-2 border-[#c0392b]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-[#c0392b]/30 animate-fade-in">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`block w-full text-left px-6 py-3 font-oswald tracking-widest uppercase text-sm border-b border-white/5 ${
                  activeSection === item.id ? 'text-[#e74c3c] bg-[#c0392b]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">

        {/* ========== HOME ========== */}
        {activeSection === 'home' && (
          <div>
            <section className="relative h-[90vh] overflow-hidden flex items-center">
              <div className="absolute inset-0">
                <img src={HERO_IMG} alt="Arena" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="relative max-w-7xl mx-auto px-4 animate-slide-up">
                <div className="inline-block bg-[#c0392b] px-3 py-1 mb-4">
                  <span className="font-roboto-condensed font-bold text-xs tracking-[0.3em] uppercase">UFC · Россия и Кавказ</span>
                </div>
                <h1 className="font-oswald text-6xl md:text-9xl font-bold leading-none mb-2 tracking-tight">
                  НАШИ<br /><span className="text-[#c0392b]">В UFC</span>
                </h1>
                <p className="font-roboto text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                  Бойцы из России и Кавказа в UFC.<br />Биографии, рекорды и видео боёв.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('fighters')}
                    className="bg-[#c0392b] hover:bg-[#e74c3c] text-white font-oswald font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all"
                  >
                    Каталог бойцов
                  </button>
                  <button
                    onClick={() => navigate('stats')}
                    className="border border-white/30 hover:border-white text-white font-oswald font-bold px-8 py-3 text-sm tracking-widest uppercase transition-all hover:bg-white/10"
                  >
                    Статистика
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-[#c0392b]/30">
                <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Бойцов в каталоге', value: '8' },
                    { label: 'Чемпионов UFC', value: '2' },
                    { label: 'Непобеждённых', value: '2' },
                    { label: 'Титульных боёв', value: '9' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="font-oswald text-3xl font-bold text-[#c0392b]">{stat.value}</div>
                      <div className="font-roboto text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Fighters */}
            <section className="max-w-7xl mx-auto px-4 py-16">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <div className="w-10 h-1 bg-[#c0392b] mb-3" />
                  <h2 className="font-oswald text-4xl font-bold">Топ бойцы</h2>
                </div>
                <button
                  onClick={() => navigate('fighters')}
                  className="font-roboto-condensed text-sm text-[#c0392b] hover:text-[#e74c3c] tracking-widest uppercase flex items-center gap-2 transition-colors"
                >
                  Все бойцы <Icon name="ArrowRight" size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
                {fighters.slice(0, 3).map(fighter => (
                  <div
                    key={fighter.id}
                    className="fighter-card relative overflow-hidden cursor-pointer bg-[#0d0d0d] group"
                    onClick={() => { setSelectedFighter(fighter); setActiveSection('fighters'); }}
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img src={fighter.img} alt={fighter.name} className="w-full h-full object-cover transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className="fighter-overlay absolute inset-0 bg-[#c0392b]/20 opacity-0 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 bg-[#c0392b] px-2 py-1">
                        <span className="font-oswald font-bold text-xs">#{fighter.rank}</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 border border-white/10">
                        <span className="font-roboto text-xs text-gray-300">{fighter.weightClass}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-[#c0392b] font-roboto-condensed text-xs tracking-widest uppercase mb-1">{fighter.nickname}</div>
                      <h3 className="font-oswald text-2xl font-bold mb-2 group-hover:text-[#e74c3c] transition-colors">{fighter.name}</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-oswald text-2xl font-bold">
                          <span className="record-win">{fighter.record.wins}</span>
                          <span className="text-gray-500 mx-1">-</span>
                          <span className="record-loss">{fighter.record.losses}</span>
                          {fighter.record.draws > 0 && (
                            <><span className="text-gray-500 mx-1">-</span><span className="record-draw">{fighter.record.draws}</span></>
                          )}
                        </span>
                        <span className="font-roboto text-xs text-gray-500">{fighter.nationality}</span>
                      </div>
                      <div className="text-[#c0392b] font-roboto-condensed text-xs tracking-wider">{fighter.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest News */}
            <section className="bg-[#111] py-16">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <div className="w-10 h-1 bg-[#c0392b] mb-3" />
                    <h2 className="font-oswald text-4xl font-bold">Последние новости</h2>
                  </div>
                  <button
                    onClick={() => navigate('news')}
                    className="font-roboto-condensed text-sm text-[#c0392b] hover:text-[#e74c3c] tracking-widest uppercase flex items-center gap-2 transition-colors"
                  >
                    Все новости <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
                  {news.map(item => (
                    <div key={item.id} className="bg-[#111] hover:bg-[#161616] transition-colors cursor-pointer group">
                      <div className="h-40 overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-[#c0392b] px-2 py-0.5 font-roboto-condensed text-xs tracking-widest uppercase">{item.category}</span>
                          <span className="text-gray-500 font-roboto text-xs">{item.date}</span>
                        </div>
                        <h3 className="font-oswald text-lg font-bold leading-tight group-hover:text-[#e74c3c] transition-colors">{item.title}</h3>
                        <p className="font-roboto text-gray-500 text-sm mt-2 line-clamp-2">{item.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========== FIGHTERS LIST ========== */}
        {activeSection === 'fighters' && !selectedFighter && (
          <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
            <div className="mb-8">
              <div className="w-10 h-1 bg-[#c0392b] mb-3" />
              <h2 className="font-oswald text-5xl font-bold">Каталог бойцов</h2>
              <p className="text-gray-400 font-roboto mt-2">Профессиональные бойцы лиги</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {weightClasses.map(wc => (
                <button
                  key={wc}
                  onClick={() => setWeightFilter(wc)}
                  className={`px-4 py-2 font-roboto-condensed text-sm tracking-widest uppercase border transition-all ${
                    weightFilter === wc
                      ? 'bg-[#c0392b] border-[#c0392b] text-white'
                      : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {wc}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
              {filteredFighters.map(fighter => (
                <div
                  key={fighter.id}
                  className="fighter-card bg-[#0d0d0d] cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedFighter(fighter)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={fighter.img} alt={fighter.name} className="w-full h-full object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="fighter-overlay absolute inset-0 bg-[#c0392b]/20 opacity-0 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 bg-[#c0392b] px-2 py-1">
                      <span className="font-oswald font-bold text-xs">#{fighter.rank}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[#c0392b] font-roboto-condensed text-xs tracking-widest mb-1">{fighter.nickname}</div>
                    <h3 className="font-oswald text-xl font-bold group-hover:text-[#e74c3c] transition-colors mb-1">{fighter.name}</h3>
                    <div className="text-gray-500 font-roboto text-xs mb-2">{fighter.weightClass}</div>
                    <div className="font-oswald text-xl font-bold">
                      <span className="record-win">{fighter.record.wins}</span>
                      <span className="text-gray-600 mx-1">-</span>
                      <span className="record-loss">{fighter.record.losses}</span>
                      {fighter.record.draws > 0 && <><span className="text-gray-600 mx-1">-</span><span className="record-draw">{fighter.record.draws}</span></>}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-gray-400 text-xs font-roboto group-hover:text-[#c0392b] transition-colors">
                      Подробнее <Icon name="ChevronRight" size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========== FIGHTER PROFILE ========== */}
        {activeSection === 'fighters' && selectedFighter && (
          <div className="animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <button
                onClick={() => setSelectedFighter(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-white font-roboto-condensed text-sm tracking-widest uppercase transition-colors"
              >
                <Icon name="ArrowLeft" size={16} /> Все бойцы
              </button>
            </div>

            <div className="relative h-80 overflow-hidden">
              <img src={selectedFighter.img} alt={selectedFighter.name} className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 pb-8">
                <div className="bg-[#c0392b] inline-block px-3 py-1 mb-3">
                  <span className="font-roboto-condensed font-bold text-xs tracking-[0.3em] uppercase">{selectedFighter.status}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                  <div>
                    <div className="text-[#c0392b] font-roboto-condensed text-sm tracking-widest mb-1">{selectedFighter.nickname}</div>
                    <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none">{selectedFighter.name}</h1>
                    <div className="text-gray-400 font-roboto mt-2">{selectedFighter.weightClass} • {selectedFighter.nationality}</div>
                  </div>
                  <div className="md:ml-auto text-left md:text-right">
                    <div className="font-oswald text-5xl font-bold">
                      <span className="record-win">{selectedFighter.record.wins}</span>
                      <span className="text-gray-600 mx-2">-</span>
                      <span className="record-loss">{selectedFighter.record.losses}</span>
                      {selectedFighter.record.draws > 0 && (
                        <><span className="text-gray-600 mx-2">-</span><span className="record-draw">{selectedFighter.record.draws}</span></>
                      )}
                    </div>
                    <div className="text-gray-500 font-roboto text-sm">П — П — Н</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-6">
                  <div className="bg-[#111] border border-white/5 p-6">
                    <h3 className="font-oswald text-lg tracking-widest text-[#c0392b] mb-4 uppercase">Физические данные</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Возраст', value: `${selectedFighter.age} лет` },
                        { label: 'Рост', value: selectedFighter.height },
                        { label: 'Вес', value: selectedFighter.weight },
                        { label: 'Размах рук', value: selectedFighter.reach },
                        { label: 'Стойка', value: selectedFighter.stance },
                      ].map(item => (
                        <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="font-roboto text-gray-500 text-sm">{item.label}</span>
                          <span className="font-roboto-condensed font-bold text-white text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#111] border border-white/5 p-6">
                    <h3 className="font-oswald text-lg tracking-widest text-[#c0392b] mb-4 uppercase">Способ победы</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Нокаут / ТКО', value: selectedFighter.wins_by.ko, total: selectedFighter.record.wins, color: '#c0392b' },
                        { label: 'Сабмишн', value: selectedFighter.wins_by.sub, total: selectedFighter.record.wins, color: '#f39c12' },
                        { label: 'Решение судей', value: selectedFighter.wins_by.dec, total: selectedFighter.record.wins, color: '#27ae60' },
                      ].map(item => (
                        <div key={item.label}>
                          <div className="flex justify-between mb-1">
                            <span className="font-roboto text-gray-400 text-xs">{item.label}</span>
                            <span className="font-oswald font-bold text-sm">{item.value}</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${(item.value / Math.max(item.total, 1)) * 100}%`, backgroundColor: item.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#111] border border-white/5 p-6">
                    <h3 className="font-oswald text-lg tracking-widest text-[#c0392b] mb-4 uppercase">Биография</h3>
                    <p className="font-roboto text-gray-300 leading-relaxed">{selectedFighter.bio}</p>
                  </div>

                  <div className="bg-[#111] border border-white/5 p-6">
                    <h3 className="font-oswald text-lg tracking-widest text-[#c0392b] mb-4 uppercase">Послужной список</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-[#0d0d0d] p-4 border border-white/5">
                        <div className="font-oswald text-4xl font-bold record-win">{selectedFighter.record.wins}</div>
                        <div className="font-roboto text-gray-500 text-xs mt-1 tracking-widest uppercase">Победы</div>
                      </div>
                      <div className="bg-[#0d0d0d] p-4 border border-white/5">
                        <div className="font-oswald text-4xl font-bold record-loss">{selectedFighter.record.losses}</div>
                        <div className="font-roboto text-gray-500 text-xs mt-1 tracking-widest uppercase">Поражения</div>
                      </div>
                      <div className="bg-[#0d0d0d] p-4 border border-white/5">
                        <div className="font-oswald text-4xl font-bold record-draw">{selectedFighter.record.draws}</div>
                        <div className="font-roboto text-gray-500 text-xs mt-1 tracking-widest uppercase">Ничьи</div>
                      </div>
                    </div>
                  </div>

                  {selectedFighter.videos.length > 0 && (
                    <div className="bg-[#111] border border-white/5 p-6">
                      <h3 className="font-oswald text-lg tracking-widest text-[#c0392b] mb-4 uppercase">Видео боёв</h3>
                      <div className="space-y-3">
                        {selectedFighter.videos.map((video, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 bg-[#0d0d0d] border border-white/5 p-4 hover:border-[#c0392b]/50 cursor-pointer transition-all group"
                          >
                            <div className="w-12 h-12 bg-[#c0392b]/20 border border-[#c0392b]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c0392b]/40 transition-colors">
                              <Icon name="Play" size={18} className="text-[#c0392b]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-roboto-condensed font-bold text-sm group-hover:text-[#e74c3c] transition-colors truncate">{video.title}</div>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="font-roboto text-gray-500 text-xs">{video.date}</span>
                                <span className="font-roboto text-gray-600 text-xs">{video.duration}</span>
                              </div>
                            </div>
                            <Icon name="ChevronRight" size={16} className="text-gray-600 group-hover:text-[#c0392b] transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== STATS ========== */}
        {activeSection === 'stats' && (
          <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
            <div className="mb-10">
              <div className="w-10 h-1 bg-[#c0392b] mb-3" />
              <h2 className="font-oswald text-5xl font-bold">Статистика</h2>
              <p className="text-gray-400 font-roboto mt-2">Общая статистика лиги и рейтинги бойцов</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] mb-10">
              {[
                { label: 'Всего боёв', value: '214', icon: 'Trophy' },
                { label: 'Нокаутов', value: '89', icon: 'Zap' },
                { label: 'Сабмишнов', value: '64', icon: 'Award' },
                { label: 'Ср. время боя', value: '2:47', icon: 'Clock' },
              ].map(s => (
                <div key={s.label} className="bg-[#0d0d0d] p-8 text-center hover:bg-[#111] transition-colors">
                  <div className="flex justify-center mb-3">
                    <Icon name={s.icon} size={28} className="text-[#c0392b]" />
                  </div>
                  <div className="font-oswald text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="font-roboto text-gray-500 text-xs tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-white/5">
              <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <Icon name="BarChart2" size={20} className="text-[#f39c12]" />
                <h3 className="font-oswald text-2xl font-bold tracking-widest uppercase">Рейтинг бойцов</h3>
              </div>
              <div>
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-gray-600 font-roboto-condensed text-xs tracking-widest uppercase border-b border-white/5">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Боец</div>
                  <div className="col-span-2 text-center">Запись</div>
                  <div className="col-span-2 text-center hidden md:block">Нок.</div>
                  <div className="col-span-2 text-center hidden md:block">Саб.</div>
                  <div className="col-span-1 text-center">%П</div>
                </div>
                {[...fighters].sort((a, b) => a.rank - b.rank).map((f, i) => (
                  <div
                    key={f.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 hover:bg-[#161616] cursor-pointer transition-colors items-center"
                    onClick={() => { setSelectedFighter(f); setActiveSection('fighters'); }}
                  >
                    <div className="col-span-1">
                      <span className={`font-oswald font-bold text-lg ${i === 0 ? 'text-[#f39c12]' : 'text-gray-500'}`}>{f.rank}</span>
                    </div>
                    <div className="col-span-4 flex items-center gap-3">
                      <img src={f.img} alt={f.name} className="w-10 h-10 object-cover flex-shrink-0" />
                      <div>
                        <div className="font-roboto-condensed font-bold text-sm">{f.name}</div>
                        <div className="font-roboto text-gray-500 text-xs">{f.weightClass}</div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center font-oswald font-bold">
                      <span className="record-win">{f.record.wins}</span>
                      <span className="text-gray-600 mx-1">-</span>
                      <span className="record-loss">{f.record.losses}</span>
                    </div>
                    <div className="col-span-2 text-center font-oswald hidden md:block">{f.wins_by.ko}</div>
                    <div className="col-span-2 text-center font-oswald hidden md:block">{f.wins_by.sub}</div>
                    <div className="col-span-1 text-center">
                      <span className="font-oswald font-bold text-[#c0392b]">
                        {Math.round((f.record.wins / (f.record.wins + f.record.losses + f.record.draws)) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== NEWS ========== */}
        {activeSection === 'news' && (
          <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
            <div className="mb-10">
              <div className="w-10 h-1 bg-[#c0392b] mb-3" />
              <h2 className="font-oswald text-5xl font-bold">Новости</h2>
              <p className="text-gray-400 font-roboto mt-2">Последние события Fight League</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
              {news.map(item => (
                <div key={item.id} className="bg-[#0d0d0d] hover:bg-[#111] transition-colors cursor-pointer group">
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#c0392b] px-3 py-1 font-roboto-condensed font-bold text-xs tracking-widest uppercase">{item.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-gray-500 font-roboto text-xs">
                      <Icon name="Calendar" size={12} />
                      {item.date}
                    </div>
                    <h3 className="font-oswald text-xl font-bold mb-3 leading-tight group-hover:text-[#e74c3c] transition-colors">{item.title}</h3>
                    <p className="font-roboto text-gray-400 text-sm leading-relaxed">{item.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#c0392b] font-roboto-condensed text-xs tracking-widest uppercase">
                      Читать полностью <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========== GALLERY ========== */}
        {activeSection === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
            <div className="mb-10">
              <div className="w-10 h-1 bg-[#c0392b] mb-3" />
              <h2 className="font-oswald text-5xl font-bold">Галерея</h2>
              <p className="text-gray-400 font-roboto mt-2">Фотографии турниров и бойцов</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a]">
              {galleryImages.map(item => (
                <div
                  key={item.id}
                  className="relative overflow-hidden cursor-pointer group h-56 md:h-72 bg-[#0d0d0d]"
                  onClick={() => setSelectedGallery(item)}
                >
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-roboto-condensed text-sm text-white font-bold">{item.caption}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ZoomIn" size={16} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedGallery && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedGallery(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-[#c0392b] transition-colors" onClick={() => setSelectedGallery(null)}>
              <Icon name="X" size={32} />
            </button>
            <div onClick={e => e.stopPropagation()}>
              <img src={selectedGallery.img} alt={selectedGallery.caption} className="max-h-[85vh] max-w-[90vw] object-contain" />
              <p className="text-center font-roboto-condensed text-gray-400 mt-4 tracking-widest text-sm uppercase">{selectedGallery.caption}</p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-[#c0392b]/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#c0392b] flex items-center justify-center">
                  <span className="font-oswald font-bold text-white text-sm">UFC</span>
                </div>
                <span className="font-oswald font-bold text-xl tracking-widest">UFC · РУС БОЙЦЫ</span>
              </div>
              <p className="font-roboto text-gray-600 text-sm">Бойцы из России и Кавказа в UFC</p>
            </div>
            <div className="flex flex-wrap gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className="font-roboto-condensed text-gray-500 hover:text-[#c0392b] text-sm tracking-widest uppercase transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 text-center text-gray-700 font-roboto text-xs">
            © 2026 UFC · Бойцы из России и Кавказа. Информационный каталог.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;