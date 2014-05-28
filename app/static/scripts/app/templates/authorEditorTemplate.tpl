<header></header>
<main id="main" role="main">
    <h2>
        <% if (url) { %><a href="<%= url %>"><% } %>
        <%= listName %>
        <% if (url) { %></a><% } %>
    </h2>
    <h4>author of
        <% _.each(books, function(book, i, l) { %>
        <a href="books/by-title/<%= book.slug %>"><%= book.title %></a><% if (i === l.length - 2) { %> and
            <% } else if (i < l.length - 2) { %>,
            <% } %>
        <% }); %>
    </h4>
</main>
<footer></footer>

