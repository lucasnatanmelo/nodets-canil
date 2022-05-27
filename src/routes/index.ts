//RESUMO:
//Aqui irão ficar as rotas onde serão inseridas as páginas
//São importadas de PageController e SearchController   

import {Router} from 'express'; //Importar o router de express
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController';

const router = Router(); 

//Inserção das rotas
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);


export default router;
