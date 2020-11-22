#include <stdio.h>
#include <stdlib.h>

int main(void){
    int qnt,i,num1,num2,denom1,denom2,aux1,aux2,resto,result1,result2;
    char sinal;

    scanf("%d",&qnt);
    
    for(i=0;i<qnt;i++){
        scanf("%d / %d %c %d / %d",&num1,&denom1,&sinal,&num2,&denom2);

        if(sinal=='+'){
            result1=(num1*denom2 + num2*denom1);
            result2=(denom1*denom2);
            printf("%d/%d = ",result1,result2);

        }else if(sinal=='-'){
            result1=(num1*denom2 - num2*denom1);
            result2=(denom1*denom2);
            printf("%d/%d = ",result1,result2);

        }else if(sinal=='*'){
            result1=(num1*num2);
            result2=(denom1*denom2);
            printf("%d/%d = ",result1,result2);

        }else if(sinal=='/'){
            result1=(num1*denom2);
            result2=(num2*denom1);
            printf("%d/%d = ",result1,result2);
        }

        aux1=result1;
        aux2=result2;
        resto=abs(aux1%aux2);
        while(resto!=0){
            aux1=aux2;
            aux2=resto;
            resto=abs(aux1%aux2);
        }

        printf("%d/%d\n",result1/aux2,result2/aux2);
    }}