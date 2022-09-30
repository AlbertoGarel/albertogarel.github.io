//change language privacy policy

const url = window.location.href;

const imageLanguages = {
    esp: {
        urlImage: "../assets/images/espana.png",
        alt: "bandera española",
        itemsClass: 'esp-items',
        title: 'PrintingAPP - Política de privacidad'
    },
    eng: {
        urlImage: "../assets/images/reino-unido.png",
        alt: "England flag",
        itemsClass: 'eng-items',
        title: 'PrintingAPP - Privacy policy'
    }
}


if (url.includes("privacy")) {
    let hash = ''
    if (!window.location.hash) {
        hash = location.hash = '#esp'
    } else {
        hash = location.hash
    }

    let insertElements = document.getElementById('insertHtml')
    let selected = document.getElementById('selected_language');
    let contentChilds = document.getElementById('flags_content').children;
    // predefinido según url hash
    insertElements.innerHTML = languagesContent.printingapp[hash.substring(1)]
    document.getElementById('privacy-h1').innerText = `${imageLanguages[hash.substring(1)].title}`
    document.title = imageLanguages[hash.substring(1)].title
    selected.setAttribute('src', imageLanguages[hash.substring(1)].urlImage)
    selected.setAttribute('alt', imageLanguages[hash.substring(1)].alt)
    document.querySelector(`#flags_content ${window.location.hash}`).setAttribute('style', "display: none")

    function changeLanguage(lang) {
        const viewElements = document.getElementById('insertHtml')
        for (let i = 0; i < contentChilds.length; i++) {
            if (contentChilds[i].getAttribute('id') === lang) {
                contentChilds[i].setAttribute('style', "display: none")
                // viewElements.innerHTML = '<h1>comeme la polla</h1>'
            } else {
                contentChilds[i].setAttribute('style', "display: block")
            }
        }
        // let nonDisplay = contentChilds.querySelector(`#${lang}`)
        // console.log(nonDisplay)
        insertElements.innerHTML = languagesContent.printingapp[lang]
        selected.setAttribute('src', imageLanguages[lang].urlImage)
        selected.setAttribute('alt', imageLanguages[lang].alt)
        document.getElementById('privacy-h1').innerText = `${imageLanguages[lang].title}`
        document.title = imageLanguages[lang].title
        window.location.hash = lang
    }
}
