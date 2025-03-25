import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {routes} from "../routes/routes.jsx";

export function getPageMeta(location) {
    const currentRoute = routes.find(route =>
        route.path === location.pathname ||
        (route.path.includes(":") && location.pathname.startsWith(route.path.split("/:")[0]))
    );
    return currentRoute || {title: 'LazyChef', description: 'Discover tasty recipes.'};
}

export function usePageTitle() {
    const location = useLocation();
    const {title, description} = getPageMeta(location);

    useEffect(() => {
        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [location, title, description]);

    return title;
}
