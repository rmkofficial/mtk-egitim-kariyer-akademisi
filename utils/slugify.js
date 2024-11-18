export function slugify(text) {
    const map = {
        'ç': 'c',
        'ğ': 'g',
        'ı': 'i',
        'ö': 'o',
        'ş': 's',
        'ü': 'u',
        'Ç': 'c',
        'Ğ': 'g',
        'İ': 'i',
        'Ö': 'o',
        'Ş': 's',
        'Ü': 'u'
    };

    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[çğışöüÇĞİŞÖÜ]/g, match => map[match]) // Türkçe karakterleri değiştir
        .replace(/\s+/g, '-') // Boşlukları '-' ile değiştir
        .replace(/[^\w\-]+/g, '') // Özel karakterleri kaldır
        .replace(/\-\-+/g, '-'); // Çift '-' işaretlerini tek '-' yap
}
