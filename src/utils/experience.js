// Professional experience start date — SoftifyBD internship, April 2024
const CAREER_START = new Date('2024-04-16');

/**
 * Returns a human-readable experience string, e.g. "1 year", "2 years"
 */
export function getExperienceLabel() {
    const now = new Date();
    let years = now.getFullYear() - CAREER_START.getFullYear();
    const monthDiff = now.getMonth() - CAREER_START.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < CAREER_START.getDate())) {
        years--;
    }
    if (years < 1) return 'less than a year';
    return years === 1 ? '1 year' : `${years} years`;
}
