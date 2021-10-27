{ 
   let fechaHoy = new Date();
   document.write("Fecha hoy: " + fechaHoy + "<br/>");
   let fecha85 = new Date(fechaHoy.getDate() + 85);
   document.write("Fecha 85: " + fecha85 + "<br/>");
   let fecha187 = new Date(fechaHoy.getDate() + 187);
   document.write("Fecha 187: " + fecha187 + "<br/>");

   fecha85.setFullYear(fecha85.getFullYear() + 2);
   document.write("Fecha 85 + 2 years: " + fecha85 + "<br/>");
   fecha187.setHours(fecha187.getHours() + 24);
   document.write("Fecha 187 + 2 hours: " + fecha187 + "<br/>");

   let fechaResto = new Date(fecha85 - fecha187);
   document.write("fecha resto: " +fechaResto + "<br/>");
}