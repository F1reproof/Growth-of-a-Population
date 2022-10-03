function nbYear(p0, percent, aug, p,count=0) {
    return  p0>=p ? count :(count+=1, nbYear(p0=(p0+ p0* percent/100 +aug),percent,aug,p,count))
}