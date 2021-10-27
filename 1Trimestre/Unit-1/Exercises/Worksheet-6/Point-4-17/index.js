{ 
    for (let i = 1; i <= 10; i++) {
        document.write(`<br/><b>Tabla del ${i}</b><br/>`);
        for (let j = 1; j <= 10; j++) {
            let result = j*i;
            document.write(`${j}x${i}=${result}<br/>`);
        }
    }
    
}