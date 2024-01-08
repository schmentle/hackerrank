def timeConversion(s):
    time, modifier = s[:-2], s[-2:]
    hh, mm, ss = map(int, time.split(':'))

    if hh == 12 and modifier == 'AM':
        hh = 0
    elif modifier == 'PM' and hh != 12:
        hh += 12

    return f"{hh:02}:{mm:02}:{ss:02}"