let constante;

console.log("KM IDADE - CMPC - AXOR 3344 6x4\n\n");
//CMPC
/* Simulação - AXOR 3344 6x4 */
title = "Simulação - AXOR 3344 6x4 ";

function kmAge( horimetro ){
   if ( horimetro <= 30000 && horimetro >= 0 ){
        constante = -4;
    }else if ( horimetro <= 80000 ){
        constante = -3;
    }else if ( horimetro <= 120000 ){
        constante = -2;
    }else if ( horimetro <= 350000 ){
      constante = 0;
        //return zero
    }else if ( horimetro <= 500000 ){
        constante = -2;
    }else if ( horimetro <= 750000 ){
        constante = -3;
    }else if ( horimetro <= 2000000 ){
        constante = -4
    } 
    return constante;
}

function variationByWeight ( weight ){
    if ( weight >= 0 && weight <= 1000 ){
      return 0.36;
    } else if ( weight <= 2000 ){
      return 0.32;
    } else if ( weight <= 3000 ){
      return 0.28;
    }else if ( weight <= 4000 ){
      return 0.27;  
    } else if ( weight <= 5000 ){
      return 0.26;
    } else if ( weight <= 6000 ){
      return 0.24;
    } else if ( weight <= 7000 ){
      return 0.23;
    } else if ( weight <= 8000 ){
      return 0.22;
    } else if ( weight <= 9000 ){
      return 0.2;
    } else if ( weight <= 10000 ){
      return 0.19;
    }else if ( weight <= 11000 ){
      return 0.18;
    } else if ( weight <= 12000 ){
      return 0.17;
    } else if ( weight <= 13000 ){
      return 0.16;
    } else if ( weight <= 14000 ){
      return 0.15;
    } else if ( weight <= 15000 ){
      return 0.14;
    } else if ( weight <= 16000 ){
      return 0.13;
    } else if ( weight <= 17000 ){
      return 0.12;
    } else if ( weight <= 18000 ){
      return 0.1;
    } else if ( weight <= 19000 ){
      return 0.08;
    } else if ( weight <= 20000 ){
      return 0.06;
    } else if ( weight <= 21000 ){
      return 0.05;
    } else if ( weight <= 22000 ){
      return 0.04;
    } else if ( weight <= 23000 ){
      return 0.03;
    } else if ( weight <= 24000 ){
      return 0.02;
    } else if ( weight <= 25000 ){
      return 0.0;
    } else if ( weight <= 26000 ){
      return -0.02;
    } else if ( weight <= 27000 ){
      return -0.04;
    } else if ( weight <= 28000 ){
      return -0.06;
    } else if ( weight <= 29000 ){
      return -0.08;
    } else if ( weight <= 30000 ){
      return -0.9;
    } else if ( weight <= 31000 ){
      return -0.12;
    } else if ( weight <= 32000 ){
      return -0.14;
    } else if ( weight <= 33000 ){
      return -0.17;
    } else if ( weight <= 34000 ){
      return -0.2;
    } else if ( weight <= 35000 ){
      return -0.22;
    } else if ( weight <= 36000 ){
      return -0.24;
    } else if ( weight <= 37000 ){
      return -0.26;
    } else if ( weight <= 38000 ){
      return -0.27;
    } else if ( weight <= 39000 ){
      return -0.28;
    } else if ( weight <= 40000 ){
      return -0.29;
    } else if ( weight <= 41000 ){
      return -0.3;
    } else if ( weight <= 42000 ){
      return -0.31;
    } else if ( weight <= 43000 ){
      return -0.32;
    } else if ( weight <= 44000 ){
      return -0.33;
    } else if ( weight <= 45000 ){
      return -0.34;
    } else if ( weight <= 46000 ){
      return -0.35;
    } else if ( weight <= 47000 ){
      return -0.36;
    } else if ( weight <= 48000 ){
      return -0.37;
    } else if ( weight <= 49000 ){
      return -0.38;
    } else if ( weight <= 50000 ){
      return -0.39;
    } else if ( weight <= 51000 ){
      return -0.4;
    } else if ( weight <= 52000 ){
      return -0.41;
    } else if ( weight <= 53000 ){
      return -0.42;
    } else if ( weight <= 54000 ){
      return -0.43;
    } else if ( weight <= 55000 ){
      return -0.44;
    } else if ( weight <= 56000 ){
      return -0.45;
    } else if ( weight <= 57000 ){
      return -0.46;
    } else if ( weight <= 58000 ){
      return -0.47;
    } else if ( weight <= 59000 ){
      return -0.48;
    } else if ( weight <= 60000 ){
      return -0.49;
    } else if ( weight <= 62000 ){
      return -0.5;
    } else if ( weight <= 64000 ){
      return -0.51;
    } else if ( weight <= 66000 ){
      return -0.52;
    } else if ( weight <= 68000 ){
      return -0.53;
    } else if ( weight <= 70000 ){
      return -0.54;
    } else if ( weight <= 71000 ){
      return -0.55;
    } else if ( weight <= 72000 ){
      return -0.56;
    } else if ( weight <= 73000 ){
      return -0.57;
    } else if ( weight <= 74000 ){
      return -0.58;
    } else if ( weight <= 75000 ){
      return -0.59;
    } else if ( weight <= 76000 ){
      return -0.6;
    } else if ( weight <= 77000 ){
      return -0.61;
    } else if ( weight <= 78000 ){
      return -0.62;
    } else if ( weight <= 79000 ){
      return -0.63;
    } else if ( weight <= 80000 ){
      return -0.64;
    }
  return undefined;
}