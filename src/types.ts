// Интерфейс для источника новостей (то, что приходит в поле source)
export interface NewsSource {
    id: string | null;
    name: string;
}

// Интерфейс для одной новости (статьи)
export interface Article {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

// Общий интерфейс для ответа от API (используем дженерик <T>)
export interface ApiResponse<T> {
    status: string;
    totalResults: number;
    articles?: T[]; // Массив статей (если запрос к новостям)
    sources?: T[]; // Массив источников (если запрос к источникам)
    message?: string;
}
