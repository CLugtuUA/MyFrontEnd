import { StyleSheet } from 'react-native';

// ------------------------------------
// COFFEE SHOP COLOR PALETTE
// ------------------------------------
const COFFEE_PALETTE = {
    // Core Warm Dark Tones
    BACKGROUND: '#2C231E',      // Deep Espresso Brown (Primary Background)
    CARD_SURFACE: '#3A3029',    // Darker Coffee/Taupe for Cards
    TEXT_LIGHT: '#F4EFE6',      // Creamy Off-White (Primary Text)
    TEXT_MUTED: '#B5A698',      // Soft Muted Beige (Secondary Text/Icons)
    
    // Warm Accent (Coffee & Cream Tones)
    ACCENT_PRIMARY: '#A37F5E',  // Warm Caramel/Medium Brown (Primary Button)
    ACCENT_SECONDARY: '#E1C2A3', // Foamy Cream/Latte Color (Secondary Button/Borders)
    TEXT_DARK: '#1E1611',       // Very Dark Brown for contrast on light accents
};

const styles = StyleSheet.create({
    // ------------------------------------
    // GLOBAL LAYOUT & CONTAINERS (Optimized Spacing)
    // ------------------------------------
    container: {
        flex: 1, 
        backgroundColor: COFFEE_PALETTE.BACKGROUND,
        paddingHorizontal: 24, // Standardized horizontal padding
        paddingTop: 32,        // More generous top padding for better flow
    },
    title: {
        fontSize: 26,           // Slightly reduced for better hierarchy
        fontWeight: '700',
        color: COFFEE_PALETTE.TEXT_LIGHT, 
        marginBottom: 24,       // Standardized bottom margin
        textAlign: 'center',
    },
    card: {
        backgroundColor: COFFEE_PALETTE.CARD_SURFACE, 
        padding: 24,           // Increased card inner padding
        borderRadius: 12,      // Slightly reduced rounding from 15 to 12
        shadowColor: COFFEE_PALETTE.TEXT_DARK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3, 
        shadowRadius: 6,
        elevation: 6, 
        marginBottom: 24,      // Standardized bottom margin
        borderWidth: 1,
        borderColor: COFFEE_PALETTE.ACCENT_PRIMARY,
        width: '50%',
        alignSelf: 'center',
    },
    
    // ------------------------------------
    // INPUTS & FORMS (Optimized Sizing)
    // ------------------------------------
    input: {
        height: 48,             // Standardized input height (48 is optimal for mobile tap)
        borderColor: COFFEE_PALETTE.ACCENT_SECONDARY,
        borderWidth: 1,
        borderRadius: 8,        // Slightly less rounded than the card
        paddingHorizontal: 16,  // Standardized inner padding
        marginBottom: 16,       // Consistent vertical spacing between inputs
        fontSize: 16,
        color: COFFEE_PALETTE.TEXT_LIGHT, 
        backgroundColor: COFFEE_PALETTE.BACKGROUND, 
    },

    // ------------------------------------
    // BUTTONS (Optimized Sizing and Padding)
    // ------------------------------------
    button: {
        backgroundColor: COFFEE_PALETTE.ACCENT_PRIMARY, 
        paddingVertical: 14,    // Standardized vertical padding
        paddingHorizontal: 24,  // Standardized horizontal padding
        borderRadius: 8,        // Matches input rounding
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,          // Generous margin above primary action
        shadowColor: COFFEE_PALETTE.ACCENT_PRIMARY, 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
    },
    buttonText: {
        color: COFFEE_PALETTE.CARD_SURFACE, 
        fontSize: 17,           // Standard button text size
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: COFFEE_PALETTE.ACCENT_SECONDARY, 
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,          // Half the margin of the primary button
    },
    secondaryButtonText: {
        color: COFFEE_PALETTE.TEXT_DARK, 
        fontSize: 17,
        fontWeight: '600',
    },

    // ------------------------------------
    // HOMEPAGE & REVIEW SPECIFIC
    // ------------------------------------
    homepageText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,       // Increased spacing for major sections
        color: COFFEE_PALETTE.TEXT_MUTED, 
    },
    reviewText: {
        fontSize: 16,
        lineHeight: 24,         // Better line height for readability
        marginBottom: 8,
        paddingVertical: 12,    // Increased vertical padding
        borderBottomColor: COFFEE_PALETTE.ACCENT_SECONDARY, 
        borderBottomWidth: 1,
        color: COFFEE_PALETTE.TEXT_LIGHT, 
    },
});

export default styles;