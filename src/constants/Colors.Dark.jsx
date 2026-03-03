// src/constants/Colors.Dark.jsx

const PRIMARY = '#818CF8';

// Neutral Scale
const GRAY_200 = '#1F2937';
const GRAY_400 = '#374151';
const GRAY_600 = '#4B5563';
const GRAY_800 = '#9CA3AF';

const WHITE = '#FFFFFF';
const BLACK = '#000000';

const DarkColors = {
    // ===== Core =====
    PRIMARY,
    THEME: PRIMARY,
    THEME_TRANSPARENT: `${PRIMARY}30`,

    WHITE,
    BLACK,

    // ===== Buttons =====
    BUTTON: PRIMARY,
    BUTTON_TEXT: WHITE,
    DISABLE_BUTTON: GRAY_600,

    // ===== Inputs =====
    INPUT_BACKGROUND: GRAY_200,
    INPUT_BORDER: GRAY_600,
    INPUT_FOCUS_BORDER: PRIMARY,
    PLACEHOLDER: GRAY_800,

    // ===== Text =====
    TEXT_PRIMARY: WHITE,
    TEXT_SECONDARY: GRAY_800,
    TEXT_LIGHT: GRAY_600,
    TEXT_INVERTED: BLACK,

    // ===== Background =====
    BACKGROUND: '#111827',
    SURFACE: GRAY_200,
    CARD: GRAY_200,
    BORDER: GRAY_600,

    // ===== Status =====
    SUCCESS: '#22C55E',
    DANGER: '#EF4444',
    WARNING: '#FBBF24',
};

export default DarkColors;