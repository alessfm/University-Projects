#include <stdio.h>
#include <stdlib.h>

int main (void){
  int x, i, areia, funciona_por_favor, dima;
  char lista[1001];

  scanf("%d", &x);

  while (x--){
    scanf("%s", lista);
    areia = funciona_por_favor = dima =  0;
    for (i=0; i<strlen(lista); i++){
      if (lista[i] == '<'){
        areia++;
      }else 
        if (lista[i] == '>'){
          if (areia > 0){
            dima++;
            areia--;
          }}}
          
    printf("%d\n", dima);
  }
  return 0;
}