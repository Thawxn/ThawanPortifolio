function menuSobre(){
    let sobre = document.getElementById('section-rigth--sobre')
    let projetos = document.getElementById('section-rigth--projetos')
    let certificado = document.getElementById('section-rigth--certificado')
    
    if (sobre.style.display = 'block'){
        let menuSobre = document.getElementById('active-sobre')
        let menuProjetos = document.getElementById('active-projetos')
        let menuCertificado = document.getElementById('active-certificado')
        menuSobre.style.color = 'rgb(8, 50, 99)'
        menuProjetos.style.color = 'rgb(0, 0, 0)'
        menuCertificado.style.color = 'rgb(0, 0, 0)'
        
        projetos.style.display = 'none'
        certificado.style.display = 'none'
    }
}
function menuProjetos(){
    let sobre = document.getElementById('section-rigth--sobre')
    let projetos = document.getElementById('section-rigth--projetos')
    let certificado = document.getElementById('section-rigth--certificado')

    if (projetos.style.display = 'block'){
        let menuSobre = document.getElementById('active-sobre')
        let menuProjetos = document.getElementById('active-projetos')
        let menuCertificado = document.getElementById('active-certificado')
        menuProjetos.style.color = 'rgb(8, 50, 99)'
        menuSobre.style.color = 'rgb(0, 0, 0)'
        menuCertificado.style.color = 'rgb(0, 0, 0)'
        
        sobre.style.display = 'none'
        certificado.style.display = 'none'
    }
}
function menuCertificado(){
    let sobre = document.getElementById('section-rigth--sobre')
    let projetos = document.getElementById('section-rigth--projetos')
    let certificado = document.getElementById('section-rigth--certificado')

    if (certificado.style.display = 'block'){
        let menuSobre = document.getElementById('active-sobre')
        let menuProjetos = document.getElementById('active-projetos')
        let menuCertificado = document.getElementById('active-certificado')
        menuCertificado.style.color = 'rgb(8, 50, 99)'
        menuSobre.style.color = 'rgb(0, 0, 0)'
        menuProjetos.style.color = 'rgb(0, 0, 0)'
        
        sobre.style.display = 'none'
        projetos.style.display = 'none'
    }
}