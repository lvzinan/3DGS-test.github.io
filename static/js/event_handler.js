document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function largeSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/img/nvidia/';
                        break;
                    case 1:
                        image.src = 'assets/img/jhu/';
                        break;
                    case 2:
                        image.src = 'assets/img/Barn/';
                        break;
                    case 3:
                        image.src = 'assets/img/Caterpillar/';
                        break;
                    case 4:
                        image.src = 'assets/img/Courthouse/';
                        break;
                    case 5:
                        image.src = 'assets/img/Ignatius/';
                        break;
                    case 6:
                        image.src = 'assets/img/Meetingroom/';
                        break;
                    case 7:
                        image.src = 'assets/img/Truck/';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '/rgb.png';
                        break;
                    case 1:
                        image.src = image.src + '/mesh.png';
                        break;
                    case 2:
                        image.src = image.src + '/normal.png';
                        break;
                }
            }

            scene_list = document.getElementById("large-scale-recon-1").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
            scene_list = document.getElementById("large-scale-recon-2").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i+2) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
        function objectSceneEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5;
            //if(idx>=3) imagesLength = 4;
            // console.log(sections);
            for (let i = 0; i < imagesLength; i++) {
                // console.log(sections[i]);
                if(imagesLength == 4 && sections.length == 5){
                    window.tmp = sections[4];
                    window.tmp_slide = sections[3].getElementsByClassName('b-dics__slider')[0];
                    sections[4].remove();
                    sections[3].getElementsByClassName('b-dics__slider')[0].remove();
                    sections[0].setAttribute('style', 'flex: 0 0 259px;');
                    sections[0].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 259px;');
                    sections[1].setAttribute('style', 'flex: 0 0 259px;');
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 518px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -259px;');
                    sections[2].setAttribute('style', 'flex: 0 0 259px;');
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 777px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Adaptive Filter (Ours)';
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -518px;');
                    sections[3].setAttribute('style', 'flex: 0 0 259px;');
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -777px;');
                }
                if(imagesLength == 5 && sections.length == 4){
                    dics.appendChild(window.tmp);
                    sections[3].appendChild(window.tmp_slide);
                    sections = dics.getElementsByClassName('b-dics__section');
                    sections[0].setAttribute('style', 'flex: 0 0 207px;');
                    sections[0].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 207px;');
                    sections[1].setAttribute('style', 'flex: 0 0 207px;');
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 414px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -207px;');
                    sections[2].setAttribute('style', 'flex: 0 0 207px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Integration (Ours)';
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 621px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -414px;');
                    sections[3].setAttribute('style', 'flex: 0 0 207px;');
                    sections[3].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 828px;');
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Super Sampling (Ours)';
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -621px;');
                    sections[4].setAttribute('style', 'flex: 0 0 207px;');
                    sections[4].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                    sections[4].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -828px;');
                }
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'static/results/building-';
                        break;
                    case 1:
                        image.src = 'static/results/rubble-';
                        break;
                    case 2:
                        image.src = 'static/results/residence-';
                        break;
                    case 3:
                        image.src = 'static/results/sci-';
                        break;
                    case 4:
                        image.src = 'static/results/sjtu-';
                        break;
                    case 5:
                        image.src = 'static/results/building-';
                        break;
                }
                if(idx<=5){
                    switch (i) {
                        case 0:
                            image.src = image.src + 'switch1.jpg';
                            break;
                        case 1:
                            image.src = image.src + 'vast1.png';
                            break;
                        case 2:
                            image.src = image.src + 'city1.png';
                            break;
                        case 3:
                            image.src = image.src + 'ours1.png';
                            break;
                        case 4:
                            image.src = image.src + 'gt1.png';
                            break;
    
                    }
                }else{
                    switch (i) {
                        case 0:
                            image.src = image.src + 'gt.png';
                            break;
                        case 1:
                            image.src = image.src + 'ours.png';
                            break;
                        case 2:
                            image.src = image.src + 'vast.png';
                            break;
                        case 3:
                            image.src = image.src + 'city.png';
                            break;
                    }
                }
            }


            let scene_list = document.getElementById("object-scale-recon").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function ablation3DEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 5;
            //if(idx>=3) imagesLength = 4;
            // console.log(sections);
            for (let i = 0; i < imagesLength; i++) {
                // console.log(sections[i]);
                if(imagesLength == 4 && sections.length == 5){
                    window.tmp2 = sections[4];
                    window.tmp_slide2 = sections[3].getElementsByClassName('b-dics__slider')[0];
                    sections[4].remove();
                    sections[3].getElementsByClassName('b-dics__slider')[0].remove();
                    sections[0].setAttribute('style', 'flex: 0 0 259px;');
                    sections[0].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 259px;');
                    sections[1].setAttribute('style', 'flex: 0 0 259px;');
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 518px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -259px;');
                    sections[2].setAttribute('style', 'flex: 0 0 259px;');
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 777px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Adaptive Filter (Ours)';
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -518px;');
                    sections[3].setAttribute('style', 'flex: 0 0 259px;');
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -777px;');
                }
                if(imagesLength == 5 && sections.length == 4){
                    dics.appendChild(window.tmp2);
                    sections[3].appendChild(window.tmp_slide2);
                    sections = dics.getElementsByClassName('b-dics__section');
                    sections[0].setAttribute('style', 'flex: 0 0 207px;');
                    sections[0].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 207px;');
                    sections[1].setAttribute('style', 'flex: 0 0 207px;');
                    sections[1].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 414px;');
                    sections[1].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -207px;');
                    sections[2].setAttribute('style', 'flex: 0 0 207px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Integration (Ours)';
                    sections[2].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 621px;');
                    sections[2].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -414px;');
                    sections[3].setAttribute('style', 'flex: 0 0 207px;');
                    sections[3].getElementsByClassName('b-dics__slider')[0].setAttribute('style', 'left: 828px;');
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'SA-GS Super Sampling (Ours)';
                    sections[3].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -621px;');
                    sections[4].setAttribute('style', 'flex: 0 0 207px;');
                    sections[4].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__text')[0].innerText = 'GT';
                    sections[4].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0].setAttribute('style', 'left: -828px;');
                }
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'resources/results/SF15';
                        break;
                    case 1:
                        image.src = 'resources/results/SF16';
                        break;
                    case 2:
                        image.src = 'resources/results/SF165';
                        break;
                    case 3:
                        image.src = 'resources/results/SF18';
                        break;
                    case 4:
                        image.src = 'resources/results/SF19';
                        break;
                    case 5:
                        image.src = 'resources/results/SF195';
                        break;
                }
                if(idx<=5){
                    switch (i) {
                        case 0:
                            image.src = image.src + '5.png';
                            break;
                        case 1:
                            image.src = image.src + '4.png';
                            break;
                        case 2:
                            image.src = image.src + '3.png';
                            break;
                        case 3:
                            image.src = image.src + '2.png';
                            break;
                        case 4:
                            image.src = image.src + '1.png';
                            break;
    
                    }
                }else{
                    switch (i) {
                        case 0:
                            image.src = image.src + '5.png';
                            break;
                        case 1:
                            image.src = image.src + '4.png';
                            break;
                        case 2:
                            image.src = image.src + '3.png';
                            break;
                        case 3:
                            image.src = image.src + '2.png';
                            break;
                    }
                }
            }

            let scene_list = document.getElementById("ablation-3d-filter").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }
