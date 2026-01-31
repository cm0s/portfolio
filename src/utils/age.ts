/**
 * Calculate the current age based on the birthday.
 * Birthday: April 19, 2012
 */
export function getAge(): number {
    const birthday = new Date(2012, 3, 19); // Month is 0-indexed, so 3 = April
    const today = new Date();
    
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    
    // If birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    
    return age;
}
