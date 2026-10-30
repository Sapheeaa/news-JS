import { Article, NewsSource } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources') as HTMLElement;

        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: MouseEvent) => {
                this.controller.getNews(e, (data: Article[]) => this.view.drawNews(data));
            });
        }
        this.controller.getSources((data: NewsSource[]) => this.view.drawSources(data));
    }
}
export default App;
