let n=120;
function spr(a)
{
    if(a>=100 && a<=200) return 0;
    else return 1;
}
if(spr(n)==0)
{
    console.log('Liczba ',n ,'jest w zakresie 100-200');
}
else console.log('Liczba ',n ,' nie jest w zakresie 100-200');
