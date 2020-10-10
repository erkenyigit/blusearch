function movieSelect(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}
