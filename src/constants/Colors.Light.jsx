// src/constants/Colors.Light.jsx

const PRIMARY = '#4F46E5'; // 🔥 Change this and whole app updates

// Neutral Scale
const GRAY_100 = '#F3F4F6';
const GRAY_200 = '#E5E7EB';
const GRAY_300 = '#D1D5DB';
const GRAY_500 = '#6B7280';
const GRAY_700 = '#374151';
const GRAY_900 = '#111827';

const WHITE = '#FFFFFF';
const BLACK = '#000000';

const LightColors = {
    // ===== Core =====
    PRIMARY,
    THEME: PRIMARY,
    THEME_TRANSPARENT: `${PRIMARY}20`,

    WHITE,
    BLACK,

    // ===== Buttons =====
    BUTTON: PRIMARY,
    BUTTON_TEXT: WHITE,
    DISABLE_BUTTON: GRAY_300,

    // ===== Inputs =====
    INPUT_BACKGROUND: WHITE,
    INPUT_BORDER: GRAY_300,
    INPUT_FOCUS_BORDER: PRIMARY,
    PLACEHOLDER: GRAY_500,

    // ===== Text =====
    TEXT_PRIMARY: GRAY_900,
    TEXT_SECONDARY: GRAY_700,
    TEXT_LIGHT: GRAY_500,
    TEXT_INVERTED: WHITE,

    // ===== Background =====
    BACKGROUND: WHITE,
    SURFACE: WHITE,
    CARD: GRAY_100,
    BORDER: GRAY_200,

    // ===== Status =====
    SUCCESS: '#16A34A',
    DANGER: '#DC2626',
    WARNING: '#F59E0B',
};

export default LightColors;