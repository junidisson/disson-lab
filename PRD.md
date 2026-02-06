# Disson Lab Website PRD

## Document Control
| Field | Value |
|-------|-------|
| Version | 0.3 |
| Status | Draft |
| Author | Juni + Dmitry |
| Created | 2026-02-06 |
| Board Task | #36 |

---

## 1. Summary

Сайт-визитка для Disson Lab — компании на стыке технологий и природы. Цель: продемонстрировать профессионализм, вызвать доверие и мотивировать потенциальных клиентов связаться с нами.

**Ключевая идея:** Биофутуризм — технологии вдохновлённые природой.

---

## 2. О компании

### Disson Lab
- **Команда:** Dmitry + Juni (пока не указываем публично)
- **Экспертиза:** Product Management, Разработка приложений
- **Философия:** Технологии + Природа, устойчивое мышление, свежий подход

### Языки
- Русский (основной)
- English (для международных клиентов)

---

## 3. Цели сайта

### Бизнес-цели
- [ ] Привлечение клиентов на услуги
- [ ] Демонстрация экспертизы и портфолио
- [ ] Формирование узнаваемого бренда

### Впечатление на посетителя
- Профессионализм
- Чувство стиля
- Уверенность в компетенциях
- Желание связаться

### Success Metrics
| Метрика | Цель |
|---------|------|
| Время на сайте | > 2 мин |
| Заявки через форму | tracking |
| Bounce rate | < 50% |

---

## 4. Структура сайта

### Основные разделы

#### 4.1 Hero / Главный экран
- **Tagline:** "Websites. Web apps. Telegram bots. Built in harmony."
- **Визуал:** ✅ `assets/images/hero-background.jpg` — УТВЕРЖДЕНО
  - Светлый cream фон, зелёные листья по краям, искорки
  - Центр свободен для текста
- **Поверх:** Логотип "Disson Lab", tagline, крупная CTA кнопка
- **Референс подхода:** unicorn.studio, droga5.com (НЕ дизайн, а концепция hero)
- Минимум текста, максимум визуального импакта

#### 4.2 О нас / About
- Философия компании
- Подход к работе
- Ценности (не биография!)

#### 4.3 Услуги / Services
- **Product Management**
  - Стратегия продукта
  - Discovery & Research
  - Roadmap planning
  - Работа с командами
  
- **Разработка приложений**
  - Web applications
  - Mobile apps
  - Telegram Mini Apps
  - AI интеграции

#### 4.4 Портфолио / Case Studies
- 3-5 ключевых проектов
- Формат: Проблема → Решение → Результат
- Скриншоты / демо где возможно

#### 4.5 Контакты / Contact
- Форма обратной связи
- Telegram
- Email
- (LinkedIn опционально)

### Опциональные разделы (v2+)
- [ ] Блог / Insights
- [ ] Отзывы клиентов
- [ ] FAQ

---

## 5. Фирменный стиль / Brand Identity

### Концепция
**Биофутуризм** — архитектурные стили:
- Biomimicry (биомимикрия)
- Biophilic design
- Organic futurism

**Месседж:** Технологии вдохновлённые природой, устойчивые решения, свежий взгляд.

### Цветовая палитра

| Роль | Цвет | HEX |
|------|------|-----|
| Primary | Sage Green | #87A878 |
| Primary Dark | Deep Forest | #2D4739 |
| Background | Warm White / Cream | #FDFBF7 |
| Neutral | Wood / Sand tones | #D4C4B0 |
| Accent | Soft Blue-Green | #6B9E9E |
| Text | Charcoal | #2C2C2C |

### Визуальные элементы
- **Формы:** Органичные, мягкие скругления (не острые углы)
- **Текстуры:** Subtle wood grain, листья, органические паттерны
- **Анимации:** Плавные, как рост растений
- **Иконки:** Стилизованные природа + tech

### Типографика
- Современная но тёплая
- Не холодный гротеск
- Варианты для рассмотрения:
  - Headlines: органичный sans-serif
  - Body: читаемый, дружелюбный

### Возможные микро-детали
- Курсор оставляет "след" как росток
- Секции переходят как слои леса
- Hover эффекты с органической анимацией
- Loading — рост растения

---

## 6. Технические требования

### Must Have (MVP)
- [ ] Адаптивный дизайн (mobile-first)
- [ ] Двуязычность (RU/EN)
- [ ] Форма обратной связи
- [ ] SEO базовый
- [ ] Быстрая загрузка (< 3s)
- [ ] HTTPS

### Nice to Have
- [ ] Анимации при скролле
- [ ] Dark mode
- [ ] Интеграция с Telegram для заявок
- [ ] Analytics (Plausible / Umami)

### Технический стек ✅ УТВЕРЖДЁН
| Layer | Technology | Why |
|-------|------------|-----|
| Framework | **Next.js 14** (App Router) | SSG, отличный DX, Vercel интеграция |
| Styling | **Tailwind CSS** | Быстрая разработка, наши цвета как variables |
| Components | **shadcn/ui** | Copy-paste, полный контроль, Radix accessibility |
| Animation | **Framer Motion** | Subtle organic анимации |
| Forms | Telegram Bot webhook | Заявки прямо в Telegram |
| Hosting | **Vercel** | Free tier, автодеплой, быстрый CDN |
| Analytics | Plausible (optional) | Privacy-friendly |

---

## 7. Вдохновение / References

### Архитектурные стили
- Biomimicry architecture
- Biophilic design
- Organic modernism

### Сайты-референсы (концепция, не дизайн)
| Сайт | Что берём |
|------|-----------|
| [unicorn.studio](https://unicorn.studio) | Hero с looping video, крупная CTA |
| [droga5.com](https://droga5.com) | Bold visual, минимализм hero |

### Структурный референс
HTML template сохранён: `references/webstudio-template.html`
- Чистая структура секций
- Навигация с blur
- Services/Portfolio grid
- Contact form

---

## 8. Открытые вопросы

- [ ] Tagline для Hero секции
- [ ] Какие проекты включить в портфолио?
- [ ] Нужен ли блог в MVP?
- [ ] Доменное имя (dissonlab.com?)
- [ ] Конкретные референсы сайтов

---

## 9. Changelog

### v0.3 (2026-02-06)
- Tech stack approved: Next.js 14 + Tailwind + shadcn/ui + Framer Motion
- Tagline finalized: "Websites. Web apps. Telegram bots. Built in harmony."
- Hero mockup v3 approved

### v0.2 (2026-02-06)
- Added tagline: "Build in Harmony"
- Added hero concept: fullscreen biofuturistic image/video
- Added site references: unicorn.studio, droga5.com
- Saved HTML structure template

### v0.1 (2026-02-06)
- Initial draft
- Defined structure, brand identity, color palette
- Biofuturism concept established
