function updateTableOfContents(content, tableOfContentsDiv) {
    let contents = $('<ul></ul>');

    $.each(content.find('.card-body'), function(ind, element) {
        // console.log($(element));
        for (let h1 = 1; h1 <= 6; h1++) {
            let tag1 = 'h' + h1 + '_' + ind;
            let header1 = $(element).find('h' + h1);
            if (header1.text()) {
                header1.attr('id', tag1);
                let content1 = $('<a />', {href: '#'+tag1, text: header1.text()});
                content1 = $('<li />', {html: content1});
                for (let h2 = h1 + 1; h2 <= 6; h2++) {
                    let header2s = $(element).find('h'+h2);
                    console.log('h'+h2, header2s);
                    if (header2s.length > 0) {
                        let level2 = $('<ul></ul>');
                        $.each(header2s, function(ind, element) {
                            let tag2 = tag1 + '_' + ind;
                            let header2 = $(element);
                            header2.attr('id', tag2);
                            let content2 = $('<a />', {href: '#'+tag2, text: header2.text()});
                            content2 = $('<li />', {html: content2});
                            level2.append(content2);
                        });
                        content1.append(level2);
                        break;
                    }
                }
                contents.append(content1);
                console.log(header1);
                // $(table).append("<li>" + header + "</li>");
                break;
            }
        }
    });
    tableOfContentsDiv.append(contents);
}

function showTableOfContents(isShow) {
    const content = $('.content');
    if (isShow) {
        let tableOfContents = $('<div />', {class: 'card-body', text: 'Table of contents:'});
        tableOfContents = $('<div />', {class: 'card mt-1 mb-2', html: tableOfContents});
        tableOfContents = $('<div />', {class: 'table-of-contents', html: tableOfContents});
        content.parent().append(tableOfContents);
        content.addClass('col-sm-12 col-md-8 pl-2 pr-2');
        tableOfContents.addClass('col-sm-12 col-md-4 pl-1 pr-1');
        updateTableOfContents(content, $(tableOfContents.find('.card-body')));
    } else {
        content.addClass('col-sm-12 col-md-12 pl-2 pr-1');
    }
}
