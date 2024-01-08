function timeConversion(s) {
    const modifier = s.slice(-2);
    let [hh, mm, ss] = s.slice(0, -2).split(':').map(Number);

    if (hh === 12 && modifier === 'AM') {
        hh = 0;
    } else if (modifier === 'PM' && hh !== 12) {
        hh += 12;
    }

    hh = String(hh).padStart(2, '0');
    mm = String(mm).padStart(2, '0');
    ss = String(ss).padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
}