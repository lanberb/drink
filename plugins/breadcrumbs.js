module.exports = {
    moldingCrumbs(route){
        console.log(route)
        const crumbs = [];
        const splitted_crumbs = route.path.split('/');
        for (let i = 0; i < splitted_crumbs.length; i++) {
            if (splitted_crumbs[i] == 'shop') {
                crumbs.push('店舗検索');
            }
        }
        const id = route.params.id;
        if (id) crumbs.push(id);
        return crumbs;
    },
}