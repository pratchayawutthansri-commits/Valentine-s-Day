/**
 * Valentine's Day Card — Interactive Card Shuffler
 * สุ่มเปิดการ์ดวาเลนไทน์ มอบให้คนพิเศษ 💕
 */

// =====================================================
// ข้อมูลการ์ดทั้ง 12 แบบ
// =====================================================
const cardCollection = [
    {
        // การ์ดที่ 1: คลาสสิก — กุหลาบแดง
        envelopeEmoji: '💌',
        envelopeLabel: 'For You',
        corners: ['🌸', '🌷', '🌷', '🌸'],
        emojiTop: '🌹',
        title: 'Happy Valentine\'s Day',
        divider: '💗',
        message: 'สุขสันต์วันวาเลนไทน์นะ 🥰<br>' +
            'ขอให้วันนี้เป็นวันที่<strong>เต็มไปด้วยรัก</strong><br>' +
            'ไม่ว่าจะอยู่ที่ไหน ขอให้มีความสุข<br>' +
            'และรู้ไว้ว่า... <strong>คุณเป็นคนพิเศษเสมอ</strong> 💕',
        signature: 'With Love ❤️',
        emojiBottom: ['🌸', '💖', '🌸'],
        bgColor: '',
        accentColor: ''
    },
    {
        // การ์ดที่ 2: น่ารัก — หมีกอด
        envelopeEmoji: '🧸',
        envelopeLabel: 'Hug Me',
        corners: ['🎀', '💝', '💝', '🎀'],
        emojiTop: '🤗',
        title: 'Sending Hugs!',
        divider: '🧸',
        message: 'ส่งกอดอุ่นๆ ให้นะ 🤗<br>' +
            'ถึงจะ<strong>ไม่ได้อยู่ใกล้กัน</strong><br>' +
            'แต่หัวใจอยู่ข้างเธอเสมอนะ<br>' +
            '<strong>กอดแน่นๆ จากใจ</strong> 💕',
        signature: 'Hugs & Kisses 💋',
        emojiBottom: ['🎀', '🧸', '🎀'],
        bgColor: 'linear-gradient(145deg, #fff8e1 0%, #ffe0b2 100%)',
        accentColor: '#ff8f00'
    },
    {
        // การ์ดที่ 3: หวานละมุน — ช็อกโกแลต
        envelopeEmoji: '🍫',
        envelopeLabel: 'Sweet Love',
        corners: ['🍬', '🍭', '🍭', '🍬'],
        emojiTop: '🍫',
        title: 'You\'re So Sweet!',
        divider: '🍩',
        message: 'เธอหวานกว่าช็อกโกแลตอีก 🍫<br>' +
            'มีเธออยู่ข้างๆ <strong>ชีวิตก็หวานขึ้น</strong><br>' +
            'ขอบคุณที่ทำให้ทุกวัน<br>' +
            '<strong>อร่อยเหมือนขนมหวาน</strong> 🧁',
        signature: 'Your Sweetie 🍬',
        emojiBottom: ['🍰', '🍫', '🍰'],
        bgColor: 'linear-gradient(145deg, #efebe9 0%, #d7ccc8 100%)',
        accentColor: '#6d4c41'
    },
    {
        // การ์ดที่ 4: โรแมนติก — แสงดาว
        envelopeEmoji: '🌙',
        envelopeLabel: 'My Star',
        corners: ['⭐', '🌟', '🌟', '⭐'],
        emojiTop: '🌙',
        title: 'You Light Up My World',
        divider: '✨',
        message: 'เธอเป็นดวงดาวที่สว่างที่สุด 🌟<br>' +
            'ในคืนที่<strong>มืดมิดที่สุด</strong><br>' +
            'เธอทำให้โลกของฉัน<br>' +
            '<strong>สว่างไสวเสมอ</strong> ✨',
        signature: 'Your Moonlight 🌙',
        emojiBottom: ['⭐', '🌙', '⭐'],
        bgColor: 'linear-gradient(145deg, #e8eaf6 0%, #c5cae9 100%)',
        accentColor: '#3f51b5'
    },
    {
        // การ์ดที่ 5: สดใส — ดอกทานตะวัน
        envelopeEmoji: '🌻',
        envelopeLabel: 'Sunshine',
        corners: ['☀️', '🌼', '🌼', '☀️'],
        emojiTop: '🌻',
        title: 'You Are My Sunshine',
        divider: '☀️',
        message: 'เธอเป็นแสงแดดของฉัน 🌞<br>' +
            'ทำให้<strong>ทุกวันสดใส</strong><br>' +
            'ยิ้มของเธอทำให้ฉัน<br>' +
            '<strong>อบอุ่นหัวใจทุกครั้ง</strong> 🌈',
        signature: 'Your Sunshine ☀️',
        emojiBottom: ['🌼', '🌻', '🌼'],
        bgColor: 'linear-gradient(145deg, #fffde7 0%, #fff9c4 100%)',
        accentColor: '#f9a825'
    },
    {
        // การ์ดที่ 6: อบอุ่น — กาแฟยามเช้า
        envelopeEmoji: '☕',
        envelopeLabel: 'My Cup',
        corners: ['🫖', '🧁', '🧁', '🫖'],
        emojiTop: '☕',
        title: 'You Warm My Heart',
        divider: '🫖',
        message: 'เธอเหมือนกาแฟยามเช้า ☕<br>' +
            'ที่<strong>ปลุกหัวใจให้ตื่น</strong>ทุกวัน<br>' +
            'ขอให้เราอบอุ่นด้วยกัน<br>' +
            '<strong>ไปนานๆ นะ</strong> 🥰',
        signature: 'With Warmth ☕',
        emojiBottom: ['🧁', '☕', '🧁'],
        bgColor: 'linear-gradient(145deg, #fbe9e7 0%, #ffccbc 100%)',
        accentColor: '#bf360c'
    },
    {
        // การ์ดที่ 7: ฝันหวาน — ผีเสื้อ
        envelopeEmoji: '🦋',
        envelopeLabel: 'Dream',
        corners: ['🌺', '🦋', '🦋', '🌺'],
        emojiTop: '🦋',
        title: 'You Give Me Butterflies',
        divider: '🌺',
        message: 'ทุกครั้งที่เจอเธอ 🦋<br>' +
            'ผีเสื้อในท้อง<strong>ก็บินว่อนไปหมด</strong><br>' +
            'หัวใจเต้นแรง ใจสั่น<br>' +
            '<strong>เพราะมีเธอทำให้ตื่นเต้น</strong> 💓',
        signature: 'Yours Flutter 🦋',
        emojiBottom: ['🌺', '🦋', '🌺'],
        bgColor: 'linear-gradient(145deg, #f3e5f5 0%, #e1bee7 100%)',
        accentColor: '#9c27b0'
    },
    {
        // การ์ดที่ 8: ใสซื่อ — กระต่ายน้อย
        envelopeEmoji: '🐰',
        envelopeLabel: 'Bunny',
        corners: ['🥕', '🐾', '🐾', '🥕'],
        emojiTop: '🐰',
        title: 'Some Bunny Loves You!',
        divider: '🐾',
        message: 'รู้มั้ย… มีกระต่ายตัวหนึ่ง 🐰<br>' +
            'ที่<strong>รักเธอมากๆ</strong> เลย<br>' +
            'อยากกระโดดไปกอดเธอ<br>' +
            '<strong>แบบไม่ยอมปล่อย</strong> 🥰',
        signature: 'Your Bunny 🐰',
        emojiBottom: ['🥕', '🐰', '🥕'],
        bgColor: 'linear-gradient(145deg, #fce4ec 0%, #f8bbd0 100%)',
        accentColor: '#ec407a'
    },
    {
        // การ์ดที่ 9: มินิมอล — หัวใจเรียบง่าย
        envelopeEmoji: '❤️',
        envelopeLabel: 'Love',
        corners: ['♥', '♥', '♥', '♥'],
        emojiTop: '❤️',
        title: 'I Love You',
        divider: '❤️',
        message: 'ไม่ต้องมีคำพูดมากมาย 💭<br>' +
            'แค่อยากบอกว่า...<br>' +
            '<strong>รักเธอนะ</strong><br>' +
            'วันนี้ พรุ่งนี้ <strong>และตลอดไป</strong> ❤️',
        signature: 'Always & Forever ♾️',
        emojiBottom: ['❤️', '❤️', '❤️'],
        bgColor: 'linear-gradient(145deg, #ffffff 0%, #ffebee 100%)',
        accentColor: '#c62828'
    },
    {
        // การ์ดที่ 10: สดใส — สายรุ้ง
        envelopeEmoji: '🌈',
        envelopeLabel: 'Rainbow',
        corners: ['🎨', '🎈', '🎈', '🎨'],
        emojiTop: '🌈',
        title: 'You Color My World',
        divider: '🎨',
        message: 'เธอทำให้โลกฉันมีสีสัน 🎨<br>' +
            'เหมือน<strong>สายรุ้งหลังฝน</strong><br>' +
            'ทุกสีสวยงาม ทุกวันสดใส<br>' +
            '<strong>เพราะมีเธออยู่ข้างกัน</strong> 🌈',
        signature: 'Colorfully Yours 🎨',
        emojiBottom: ['🎈', '🌈', '🎈'],
        bgColor: 'linear-gradient(145deg, #e8f5e9 0%, #c8e6c9 100%)',
        accentColor: '#2e7d32'
    },
    {
        // การ์ดที่ 11: เทพนิยาย — เจ้าหญิง
        envelopeEmoji: '👑',
        envelopeLabel: 'My Queen',
        corners: ['💎', '👑', '👑', '💎'],
        emojiTop: '👑',
        title: 'You\'re My Everything',
        divider: '💎',
        message: 'ในสายตาฉัน 👑<br>' +
            'เธอเป็น<strong>ราชินีของหัวใจ</strong><br>' +
            'สวยงาม เปล่งประกาย<br>' +
            '<strong>ล้ำค่ากว่าเพชรใดๆ</strong> 💎',
        signature: 'Your King 👑',
        emojiBottom: ['💎', '👑', '💎'],
        bgColor: 'linear-gradient(145deg, #fff8e1 0%, #ffecb3 100%)',
        accentColor: '#ff8f00'
    },
    {
        // การ์ดที่ 12: ซุกซน — น่ารักแกล้ง
        envelopeEmoji: '😜',
        envelopeLabel: 'Hey You!',
        corners: ['🎉', '🎊', '🎊', '🎉'],
        emojiTop: '😘',
        title: 'Guess What?',
        divider: '💘',
        message: 'รู้มั้ย… ฉันจะบอกอะไร 🤫<br>' +
            'มาใกล้ๆ หน่อยสิ...<br>' +
            'ใกล้อีก...<br>' +
            '<strong>จุ๊บบบ!</strong> 😘💕',
        signature: 'Mwah! 💋',
        emojiBottom: ['🎉', '😘', '🎉'],
        bgColor: 'linear-gradient(145deg, #fce4ec 0%, #f8bbd0 100%)',
        accentColor: '#d81b60'
    }
];

// =====================================================
// DOM Elements
// =====================================================
const envelope = document.getElementById('envelope');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelopeBack = document.getElementById('envelopeBack');
const btnToggle = document.getElementById('btnToggle');
const btnShuffle = document.getElementById('btnShuffle');
const bgHearts = document.getElementById('bgHearts');
const sparkleBox = document.getElementById('sparkleContainer');
const counterText = document.getElementById('counterText');

// DOM — ส่วนที่จะอัปเดตตามการ์ด
const elEnvelopeEmoji = document.getElementById('envelopeEmoji');
const elEnvelopeLabel = document.getElementById('envelopeLabel');
const elCornerTL = document.getElementById('cornerTL');
const elCornerTR = document.getElementById('cornerTR');
const elCornerBL = document.getElementById('cornerBL');
const elCornerBR = document.getElementById('cornerBR');
const elCardEmojiTop = document.getElementById('cardEmojiTop');
const elCardTitle = document.getElementById('cardTitle');
const elCardDivider = document.getElementById('cardDivider');
const elCardMessage = document.getElementById('cardMessage');
const elCardSignature = document.getElementById('cardSignature');
const elCardEmojiBtm = document.getElementById('cardEmojiBottom');

let isOpened = false;       // สถานะเปิด/ปิด
let usedIndexes = [];       // เก็บลำดับที่สุ่มแล้ว (ไม่ซ้ำ)
let isAnimating = false;    // ป้องกัน spam click (debounce)

// =====================================================
// ฟังก์ชันสุ่มลำดับการ์ด (Fisher-Yates Shuffle)
// =====================================================
function generateShuffleOrder() {
    const arr = [];
    for (let i = 0; i < cardCollection.length; i++) {
        arr.push(i);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// สุ่มการ์ดถัดไป
function getNextCardIndex() {
    if (usedIndexes.length === 0) {
        usedIndexes = generateShuffleOrder();
    }
    return usedIndexes.pop();
}

// =====================================================
// อัปเดตเนื้อหาการ์ดตาม index
// =====================================================
function applyCardData(index) {
    const card = cardCollection[index];

    // --- ด้านหน้าซอง ---
    elEnvelopeEmoji.textContent = card.envelopeEmoji;
    elEnvelopeLabel.textContent = card.envelopeLabel;
    elCornerTL.textContent = card.corners[0];
    elCornerTR.textContent = card.corners[1];
    elCornerBL.textContent = card.corners[2];
    elCornerBR.textContent = card.corners[3];

    // --- ด้านในการ์ด ---
    elCardEmojiTop.textContent = card.emojiTop;
    elCardTitle.textContent = card.title;
    elCardDivider.textContent = card.divider;
    elCardMessage.innerHTML = card.message;
    elCardSignature.textContent = card.signature;

    // อีโมจิด้านล่าง
    elCardEmojiBtm.innerHTML = card.emojiBottom
        .map(function (e) { return '<span aria-hidden="true">' + e + '</span>'; })
        .join('');

    // --- สีพื้นหลังการ์ด ---
    envelopeBack.style.background = card.bgColor || '#ffffff';

    // --- สีเน้น (accent) ---
    if (card.accentColor) {
        elCardTitle.style.color = card.accentColor;
        elEnvelopeLabel.style.color = card.accentColor;
    } else {
        elCardTitle.style.color = '';
        elEnvelopeLabel.style.color = '';
    }

    // อัปเดตตัวนับ
    counterText.textContent = 'การ์ด ' + (index + 1) + ' / ' + cardCollection.length;
}

// =====================================================
// เปิด/ปิดการ์ด
// =====================================================
function toggleCard() {
    if (isAnimating) return; // ป้องกัน spam click

    isOpened = !isOpened;

    if (isOpened) {
        envelope.classList.add('opened');
        btnToggle.querySelector('.btn-text').textContent = 'ปิดการ์ด';
        btnToggle.querySelector('.btn-icon').textContent = '💝';
        btnToggle.setAttribute('aria-label', 'ปิดการ์ด');

        // เอฟเฟกต์ประกายและหัวใจตกลงมา (debounced)
        isAnimating = true;
        setTimeout(function () {
            createSparkles();
            createConfettiHearts();
            isAnimating = false;
        }, 400);

    } else {
        envelope.classList.remove('opened');
        btnToggle.querySelector('.btn-text').textContent = 'เปิดการ์ด';
        btnToggle.querySelector('.btn-icon').textContent = '💌';
        btnToggle.setAttribute('aria-label', 'เปิดการ์ด');
    }
}

// =====================================================
// สุ่มการ์ดใหม่
// =====================================================
function shuffleCard() {
    if (isAnimating) return; // ป้องกัน spam click

    // ถ้าการ์ดเปิดอยู่ → ปิดก่อน
    if (isOpened) {
        isOpened = false;
        envelope.classList.remove('opened');
        btnToggle.querySelector('.btn-text').textContent = 'เปิดการ์ด';
        btnToggle.querySelector('.btn-icon').textContent = '💌';
        btnToggle.setAttribute('aria-label', 'เปิดการ์ด');
    }

    // Animation สั่น (shake)
    isAnimating = true;
    envelopeWrapper.classList.add('shake');

    setTimeout(function () {
        // สุ่มการ์ดใหม่
        var nextIndex = getNextCardIndex();
        applyCardData(nextIndex);

        // ลบ animation shake
        envelopeWrapper.classList.remove('shake');

        // เพิ่ม animation pop-in
        envelopeWrapper.classList.add('pop-in');
        setTimeout(function () {
            envelopeWrapper.classList.remove('pop-in');
            isAnimating = false;
        }, 500);

    }, 400);
}

// =====================================================
// เอฟเฟกต์: หัวใจพื้นหลังลอย
// =====================================================
function createBgHearts() {
    var heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '🩷', '🤍', '🩵'];
    var count = 12; // ลดจาก 20 → 12 เพื่อ performance บนมือถือ

    for (var i = 0; i < count; i++) {
        var heart = document.createElement('span');
        heart.className = 'heart';
        heart.setAttribute('aria-hidden', 'true');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.2 + 0.6) + 'rem';
        heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
        heart.style.animationDelay = (Math.random() * 10) + 's';

        bgHearts.appendChild(heart);
    }
}

// =====================================================
// เอฟเฟกต์: ประกายกระจาย
// =====================================================
function createSparkles() {
    var sparkles = ['✨', '💫', '⭐', '🌟', '💖'];
    var count = 12; // ลดจาก 15 → 12

    for (var i = 0; i < count; i++) {
        var sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.setAttribute('aria-hidden', 'true');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];

        var centerX = window.innerWidth / 2;
        var centerY = window.innerHeight / 2;

        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';

        var angle = (Math.PI * 2 / count) * i;
        var dist = Math.random() * 200 + 100;
        var tx = Math.cos(angle) * dist;
        var ty = Math.sin(angle) * dist;

        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');

        sparkleBox.appendChild(sparkle);

        setTimeout(function (el) { el.remove(); }, 1500, sparkle);
    }
}

// =====================================================
// เอฟเฟกต์: หัวใจ confetti ตกลงมา
// =====================================================
function createConfettiHearts() {
    var hearts = ['❤️', '💕', '💖', '💗', '🩷', '🤍', '💜', '🧡'];
    var count = 20; // ลดจาก 25 → 20

    for (var i = 0; i < count; i++) {
        var heart = document.createElement('span');
        heart.className = 'confetti-heart';
        heart.setAttribute('aria-hidden', 'true');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        heart.style.animationDelay = (Math.random() * 1) + 's';

        document.body.appendChild(heart);

        setTimeout(function (el) { el.remove(); }, 4000, heart);
    }
}

// =====================================================
// Event Listeners
// =====================================================

// กดซองจดหมายเพื่อเปิด/ปิด
envelopeWrapper.addEventListener('click', toggleCard);

// กดปุ่มเปิด/ปิด
btnToggle.addEventListener('click', function () {
    toggleCard();
});

// กดปุ่มสุ่มการ์ดใหม่
btnShuffle.addEventListener('click', function () {
    shuffleCard();
});

// Keyboard support: กด Enter/Space บนซองจดหมาย
envelopeWrapper.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
    }
});

// =====================================================
// Initialization
// =====================================================
createBgHearts();

// สุ่มการ์ดแรกตอนโหลด
var firstIndex = getNextCardIndex();
applyCardData(firstIndex);
