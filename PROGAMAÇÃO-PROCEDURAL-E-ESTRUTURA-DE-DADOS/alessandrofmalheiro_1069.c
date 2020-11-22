#include <stdio.h>
#include <stdlib.h>

int main (void){
  int qnt, i, areia, aux, dima;
  char lista[1001];

  scanf("%d", &qnt);

  while (qnt--){
    scanf("%s", lista);
    areia = aux = dima =  0;

    for (i=0; i<strlen(lista); i++){

      if (lista[i] == '<'){
        areia++;
        
      }else if (lista[i] == '>'){
          if (areia > 0){
            dima++;
            areia--;
          }}}
          
    printf("%d\n", dima);
  }
  return 0;
}