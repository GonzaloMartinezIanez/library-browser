import './App.css'
import { Library } from './library.jsx'
import { Search } from './search.jsx'
import { LibraryGroup } from './libraryGroup.jsx'
import { useState } from 'react'
import copy from 'copy-text-to-clipboard';


const libraryGroup = [
    {
        groupName: 'Genéricas',
        groupId: 1,
        img: ''
    },
    {
        groupName: 'España y General',
        groupId: 2,
        img: ''
    },
    {
        groupName: 'Paises importantes',
        groupId: 3,
        img: ''
    },
    {
        groupName: 'Autonómicas',
        groupId: 4,
        img: ''
    },
    {
        groupName: 'Universidad Española',
        groupId: 5,
        img: ''
    },
    {
        groupName: 'Universidades extranjeras',
        groupId: 6,
        img: ''
    },
]

const libraries = [
    {
        name: 'Internet Archive',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Internet_Archive_logo_and_wordmark.svg/1200px-Internet_Archive_logo_and_wordmark.svg.png',
        url: 'https://archive.org/details/texts?tab=collection&query=√',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Google Académico',
        img: 'https://mercedespeñairun.com/wp-content/uploads/2022/10/google-academico-1.jpg',
        url: 'https://scholar.google.es/scholar?hl=es&as_sdt=0%2C5&q=√&btnG=',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Open Library',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Open_Library_tight_logo.svg/640px-Open_Library_tight_logo.svg.png',
        url: 'https://openlibrary.org/search?q=√&mode=everything',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'The Free Libary',
        img: 'https://www.thefreelibrary.com/_/static/Online-Library.gif',
        url: 'https://www.thefreelibrary.com/_/search/Search.aspx?SearchBy=0&q=√&Search=Search&By=0',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Biblioteca Digital UNESCO',
        img: 'https://www.omnia.com.mx/public/cargas/noticias/2023/feb/25/obj259080/big_18qteuba.png',
        url: 'https://unesdoc.unesco.org/?locale=es',
        canConcat: false,
        libraryGroup: 1
    },
    {
        name: 'Wikisource',
        img: 'https://es.wikisource.org/static/images/icons/wikisource.svg',
        url: 'https://es.wikisource.org/w/index.php?search=√&title=Especial%3ABuscar&ns0=1&ns104=1',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Dialnet Rioja',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQ9QOMnYB5O9HylhLB1yUok9pnxNJPuW3fk7QVfTRwg&s',
        url: 'https://dialnet.unirioja.es/buscar/documentos?querysDismax.DOCUMENTAL_TODO=√',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Academia.edu',
        img: 'https://theme.zdassets.com/theme_assets/9711511/da6e391a486b21e488ac5d27b78829682e2a0407.svg',
        url: 'https://support.academia.edu/hc/en-us/search?utf8=✓&category=360003163373&query=√',
        canConcat: true,
        libraryGroup: 1
    },
    {
        name: 'Biblioteca Digital Mundial',
        img: 'https://www.loc.gov/static/images/logo-loc-new-branding.svg',
        url: 'https://www.loc.gov/search/?in=&q=✓&new=true&st=',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Nacional de España',
        img: 'https://400cervantes.es/wp-content/uploads/2015/12/logoBNEnegativo.png',
        url: 'https://www.bne.es/es/buscador?op=Enviar&search_api_fulltext=√#gsc.tab=0&gsc.q=√&gsc.page=1',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Digital Hispánica',
        img: 'http://bdh.bne.es/bnesearch/img/cabecera/bne.png;jsessionid=77BCAC54B036A47EBBC1A1337D402EA0',
        url: 'http://bdh.bne.es/bnesearch/Inicio.do',
        canConcat: false,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Europeana',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Europeana_logo_black.svg/2560px-Europeana_logo_black.svg.png',
        url: 'https://www.europeana.eu/es/search?page=1&view=grid&query=√',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Virtual Miguel de Cervantes',
        img: 'https://yt3.googleusercontent.com/ytc/AIf8zZQOzrFVaSuDrEp5yMu8kKtkuzkzwzgoMj76x0wxtA=s900-c-k-c0x00ffffff-no-rj',
        url: 'https://www.cervantesvirtual.com/buscador/?q=√',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Americana',
        img: 'https://yt3.googleusercontent.com/ytc/AIf8zZQOzrFVaSuDrEp5yMu8kKtkuzkzwzgoMj76x0wxtA=s900-c-k-c0x00ffffff-no-rj',
        url: 'https://www.cervantesvirtual.com/portales/biblioteca_americana/buscador/?q=√',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Bibliotecas de los Archivos Estatales',
        img: 'https://www.mcu.es/ccbae/i18n/img/header/archivos-estatales.jpg',
        url: 'https://www.mcu.es/ccbae/es/consulta/busqueda.cmd',
        canConcat: false,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Digital Real Academia de la Historia',
        img: 'https://www.rah.es/wp-content/uploads/2019/01/logo-real-academia-historia_.jpg',
        url: 'https://bibliotecadigital.rah.es/es/inicio/inicio.do',
        canConcat: false,
        libraryGroup: 2
    },
    {
        name: 'Bibliotecas y archivos de CSIC',
        img: 'https://pbs.twimg.com/profile_images/1495645200697507840/DoP9HTJp_400x400.jpg',
        url: 'https://csic-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=34CSIC_VU1&search_scope=ALL_RESOURCES_scope&mode=basic&tab=default_tab&displayMode=full&bulkSize=20&highlight=true&dum=true&query=any,contains,√&displayField=all&pcAvailabiltyMode=true&x=23&y=27',
        canConcat: true,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Virtual de Defensa',
        img: 'https://documentacionhoy.com/sites/default/files/2020-06/biblioteca-virtual-ministerio-de-defensa.jpg',
        url: 'https://bibliotecavirtual.defensa.gob.es/BVMDefensa/es/inicio/inicio.do',
        canConcat: false,
        libraryGroup: 2
    },
    {
        name: 'Biblioteca Digital CEH Obras Públicas',
        img: 'https://www.cedex.es/sites/default/files/styles/992/public/2022-11/logo_cedex.webp?itok=kMx2E3nM',
        url: 'https://www.cedex.es/buscador',
        canConcat: false,
        libraryGroup: 2
    },
    {
        name: 'Digital public Libary of America',
        img: 'https://dp.la/static/images/dpla-logo-square_250.png',
        url: 'https://dp.la/search?q=√',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'British Library',
        img: 'https://legacy.bridgemanimages.com/images/suppliers/23.jpg',
        url: 'https://bll01.primo.exlibrisgroup.com/discovery/search?query=any,contains,√&tab=LibraryCatalog&search_scope=Not_BL_Suppress&vid=44BL_INST:BLL01&lang=en&offset=0',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'The Library of Congress LOC',
        img: 'https://www.loc.gov/static/images/favicons/open-graph-logo.png',
        url: 'https://www.loc.gov/search/?in=&q=√&new=true&st=',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'Deutsche Bibliothek',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Logo_Deutsche_Digitale_Bibliothek.svg/2560px-Logo_Deutsche_Digitale_Bibliothek.svg.png',
        url: 'https://portal.dnb.de/opac.htm?method=simpleSearch&query=√',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'Gallica Biblioteca nacional francesa',
        img: 'https://www.culture.gouv.fr/var/culture/storage/images/_aliases/reference/7/3/0/4/3164037-1-fre-FR/LogoMCHP.PNG',
        url: 'https://www.culture.gouv.fr/es/Recherche?query=√&sortBy=mc_gouv_PROD-esl-ES&page=1&configure%5Bfilters%5D=hidden%3Afalse%20AND%20invisible%3Afalse%20AND%20content_object_state_ids%3A3%20AND%20is_main_location%3Atrue%20AND%20document_type%3Alocation%20AND%20%28content_type_id%3A168%20OR%20content_type_id%3A86%20OR%20content_type_id%3A117%20OR%20content_type_id%3A55%20OR%20content_type_id%3A53%20OR%20content_type_id%3A56%20OR%20content_type_id%3A58%20OR%20content_type_id%3A188%20OR%20content_type_id%3A182%29&indices%5Bmc_gouv_PROD-esl-ES-sort_by_date_desc-news%5D%5Bconfigure%5D%5Bfilters%5D=hidden%3Afalse%20AND%20invisible%3Afalse%20AND%20content_object_state_ids%3A3%20AND%20is_main_location%3Atrue%20AND%20document_type%3Alocation%20AND%20%28content_type_id%3A55%29&indices%5Bmc_gouv_PROD-esl-ES-sort_by_date_desc-news%5D%5Bconfigure%5D%5BhitsPerPage%5D=3&indices%5Bmc_gouv_PROD-esl-ES-sort_by_date_desc-news%5D%5Bconfigure%5D%5Bpage%5D=0&indices%5Bmc_gouv_PROD-esl-ES-sort_by_date_desc-news%5D%5Bpage%5D=1',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'Digital Libraries  Historische Praktijk Gante',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Logo_UGent_NL_RGB_2400_kleur-op-wit.png',
        url: 'https://www.heuristiek.ugent.be/?s=√',
        canConcat: true,
        libraryGroup: 3 
    },
    {
        name: 'Library and Archives Canada',
        img: 'https://images.squarespace-cdn.com/content/v1/5a1c710fbce17620f861bf47/1524867496254-156RYDH35NREVCFCK1O7/library+and+archives+photo+640x480.jpg',
        url: 'https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=%√',
        canConcat: true,
        libraryGroup: 3
    },
    {
        name: 'Biblioteca Digital de Albacete',
        img: 'https://www.iealbacetenses.com/images_web/logo.png',
        url: 'https://iealbacetenses.dipualba.es/results.vm?o=&w=√&f=&s=0&g=work&g=press&c=0&lang=es&view=main',
        canConcat: true,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Virtual de Andalucia',
        img: 'https://www.inqnable.es/noticias-1/biblioteca-virtual-andalucia-ofrecera-servicio-gratuito-digitalizacion-fondos-editoriales-andaluzas/image_mini',
        url: 'https://www.bibliotecavirtualdeandalucia.es/catalogo/es/consulta/busqueda.cmd',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Virtual de Castilla-La Mancha',
        img: 'https://www.bibliotecaspublicas.es/.imaging/mte/site-bibliotecas-theme/960/dam/guadalajara/conocenos/logos/institucionales-jccm/Biblioteca-Virtual-Castilla-La-Mancha---400x200.png/jcr:content/Biblioteca%20Virtual%20Castilla-La%20Mancha%20-%20400x200.png',
        url: 'https://ceclmdigital.uclm.es/results.vm?o=&w=√&f=&l=15&t=-creation&g=libros&g=graficos&g=folleots&g=bulletins&g=pages&s=0&c=1&lang=es&view=global',
        canConcat: true,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Digital de Castilla y León',
        img: 'https://bibliotecadigital.jcyl.es/i18n/img/header/logo.png',
        url: 'https://bibliotecadigital.jcyl.es/es/inicio/inicio.do',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Digital de la Comunidad de Madrid',
        img: 'https://www.comunidad.madrid/portal-lector/sites/default/files/2023-08/BDM_logo_0.jpg',
        url: 'https://bibliotecavirtualmadrid.comunidad.madrid/bvmadrid_publicacion/es/inicio/inicio.do',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Digital de la Región de Murcia',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/007/126/739/small/question-mark-icon-free-vector.jpg',
        url: '',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Biblioteca Navarra Digital',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/BiNaDi_-_Logo_actual.png',
        url: 'https://binadi.navarra.es/opac/index.php?codopac=OPBIN',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Archivo municipal de Granada',
        img: 'https://www.coe.int/documents/21864805/59785763/Ayuntamiento_Granada_Logo.png/cb298aa6-3e9a-d306-559f-36a2c5f0e2be?t=1582397068000',
        url: 'https://www.granada.org/inet/archivomunpal.nsf/buscar?openagent',
        canConcat: false,
        libraryGroup: 4
    },
    {
        name: 'Archivo municipal de Murcia',
        img: 'https://www.archivodemurcia.es/p_pandora4/img/logo.png',
        url: 'https://www.archivodemurcia.es/p_pandora4/results.vm?o=&w=√&f=&l=15&t=%2Bcreation&s=0&c=1&lang=es&view=todo',
        canConcat: true,
        libraryGroup: 4 
    },
    {
        name: 'RUA. Repositorio Univesidad de Alicante',
        img: 'https://paleoisurus.com/wp-content/uploads/2020/07/RUA.png',
        url: 'https://rua.ua.es/dspace/simple-search?query=√',
        canConcat: true,
        libraryGroup: 5
    },
    {
        name: 'Biblioteca Politécnica de Barcelona',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_UPC.svg/1200px-Logo_UPC.svg.png',
        url: 'https://www.granada.org/inet/archivomunpal.nsf/buscar?openagent',
        canConcat: false,
        libraryGroup: 5
    },
    {
        name: 'Digibug Universidad de Granada',
        img: 'https://digibug.ugr.es/static/icons/digibug.png',
        url: 'https://digibug.ugr.es',
        canConcat: false,
        libraryGroup: 5
    },
    {
        name: 'Biblioteca Universidad Complutense de Madrid',
        img: 'https://biblioteca.ucm.es/data/cont/docs/60-2016-09-20-Marca%20UCM%20logo%20negro%20RGB.jpg',
        url: 'https://ucm.on.worldcat.org/search?queryString=√&clusterResults=false&stickyFacetsChecked=true&lang=es&baseScope=zs%3A37628&groupVariantRecords=false&scope=zs%3A37628',
        canConcat: true,
        libraryGroup: 5
    },
    {
        name: 'Biblioteca Universidad Autónoma Madrid',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCx3LphI_bnahKF70EjN1pOh_hhoWvFgQNbYsIKSuXgA&s',
        url: 'https://bun.uam.es/primo-explore/search?institution=34UAM&vid=34UAM_VU1&tab=tab1&search_scope=TAB1_SCOPE1&mode=Basic&displayMode=full&bulkSize=20&highlight=true&dum=true&query=any,contains,√&displayField=all&pcAvailabiltyMode=true',
        canConcat: true,
        libraryGroup: 5
    },
    {
        name: 'Biblioteca Universidad de Murcia',
        img: 'https://www.um.es/documents/1073494/42130150/LogosimboloUMU-positivo.png/e1f004bd-ed22-23dd-682f-ab3f1f39b435?t=1693480807647&download=true',
        url: 'https://www.um.es/web/biblioteca/',
        canConcat: false,
        libraryGroup: 5
    },
    {
        name: 'Digitum. Univesidad de Murcia',
        img: 'https://digitum.um.es/digitum/image/logo-digitum-biblioteca.png',
        url: 'https://digitum.um.es/digitum/simple-search?query=√',
        canConcat: true,
        libraryGroup: 5
    },
    {
        name: 'Biblioteca Universidad de Sevilla',
        img: 'https://fama.us.es/discovery/custom/thumbnails/thumbnail_34CBUA_US-VU1.png',
        url: 'https://fama.us.es/discovery/search?query=any,contains,√&tab=all_data_not_idus&search_scope=all_data_not_idus&vid=34CBUA_US:VU1&offset=0',
        canConcat: true,
        libraryGroup: 5
    },
    {
        name: 'Teseo',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeRUhCBegrF3jk0mNUvJr0HIJnvSSxCCXaMep7O4tfw&s',
        url: 'https://www.educacion.gob.es/teseo/listarBusqueda.do;jsessionid=93FB38967A750D11ABF5481ECB9FD7A4',
        canConcat: false,
        libraryGroup: 5
    },
    {
        name: 'UC Berkeley',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png',
        url: 'https://www.berkeley.edu/search/?q=√',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'Cambridge Library',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ5v2EZtY6bfNvOQs3fI6E1VD5R-uu9pvS35BMmtitQ&s',
        url: 'https://search.cam.ac.uk/web?query=√&inst=CUL&x=7&y=12',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'Cornell Libraries',
        img: 'https://www.cornell.edu/assets/core/images/logo-red@2x.png',
        url: 'https://www.cornell.edu/search/index.cfm?q=√#gsc.tab=0&gsc.q=√&gsc.page=1',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'Harvard Libraries',
        img: 'https://fundit.fr/sites/default/files/styles/max_650x650/public/institutions/capture-decran-2023-06-01-135507.png?itok=I5qfpgeJ',
        url: 'https://hollis.harvard.edu/primo-explore/search?search-banner-input=√&tab=everything&vid=HVD2&lang=en_US&offset=0&query=any,contains,√',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'Michigan Libraries',
        img: 'https://assets.codepen.io/t-1120/MLibrary_block_M.png?format=auto',
        url: 'https://search.lib.umich.edu/everything?utm_source=lib-site-search&query=√',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'HathiTrust Digital Library',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/HathiTrust_logo_vertical.svg/1200px-HathiTrust_logo_vertical.svg.png',
        url: 'https://babel.hathitrust.org/cgi/ls?q1=√&field1=ocr&a=srchls&ft=ft&lmt=ft',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'New York Public Libary',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/New_York_Public_Library_logo.svg/800px-New_York_Public_Library_logo.svg.png',
        url: 'https://digitalcollections.nypl.org/search/index?utf8=✓&keywords=√',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'Oxford Libraries',
        img: 'https://i0.wp.com/oxforduniversitytours.co.uk/wp-content/uploads/2023/09/university-of-oxford-logo-1.png?resize=300%2C300&ssl=1',
        url: 'https://www.ox.ac.uk/search?query=√',
        canConcat: true,
        libraryGroup: 6
    },
    {
        name: 'University of Texas Libraries',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbblC5drPIsK8psMhFxIFqq8wfm41y2TnZAQIagTtvvA&s',
        url: 'https://search.lib.utexas.edu/discovery/search?keys=&query=any,%20contains,%20√&vid=01UTAU_INST:SEARCH&tab=Everything&search_scope=MyInst_and_CI&offset=0&radios=resources',
        canConcat: true,
        libraryGroup: 6
    },
]



export function App () {
    const [selectedLibrary, setSelectedLibrary] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(1);
    const [canConcat, setcanConcat] = useState(true);

    const handlelibrarySelected = (name) => {
        setSelectedLibrary(name);

        setcanConcat(libraries.find(l => l.name == name).canConcat)
    }

    const handleGroupSelected = (newLibraryGroup) => {
        // Stop selecting the old library
        if(selectedGroup != newLibraryGroup){
            setSelectedLibrary("");
            setcanConcat(true);            
        }
        
        setSelectedGroup(newLibraryGroup); 
    }

    const handleInputText = (inputText) => {
        if(selectedLibrary != ""){
            if(inputText != ""){
                var newUrl = libraries.find(l => l.name === selectedLibrary).url; 

                if(!canConcat){
                    //copiar al portapapeles
                    copy(inputText);                    
                } else{
                    newUrl = newUrl.replaceAll("√", inputText);
                }

                window.open(newUrl);
            } else{
                // Alerta: el campo está vacio
                alert("Introduce el campo a buscar");
            }           
        } else{
            // Alerta: seleccionar una libreria
            alert("Tienes que seleccionar una biblioteca");
        }
    }

    return (
        <>
            <Search
                onSearch = {handleInputText}
                canConcat = {canConcat}
            ></Search>
            <section className='group-grid'>
                {
                    libraryGroup.map(({groupName, groupId, img}) => (
                        <LibraryGroup 
                            key = {groupId}
                            groupName = {groupName}
                            groupId = {groupId}
                            img = {img}
                            isSelected = {groupId == selectedGroup}
                            onSelectGroup = {handleGroupSelected}
                        ></LibraryGroup>
                    ))
                }
            </section>
            <section className='library-grid'>
                {
                    libraries.map(({name, img, url, libraryGroup, canConcat}) => (
                        <Library 
                            key = {name}
                            name = {name}
                            img = {img}
                            url = {url}
                            libraryGroup = {libraryGroup}
                            isSelected = {name === selectedLibrary}
                            onSelectLibrary = {handlelibrarySelected}
                            selectedGroup = {selectedGroup}
                            canConcat = {canConcat}
                        ></Library>
                    )) 
                }           
            </section>
        </>
       
    )
  }
  