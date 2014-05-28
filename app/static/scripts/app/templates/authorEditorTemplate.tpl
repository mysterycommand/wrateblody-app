<header></header>
<main id="main" role="main">
    <h2>
        <% if (url) { %><a href="<%= url %>"><% } %>
        <%= listName %>
        <% if (url) { %></a><% } %>
    </h2>
    <ul>
        <% _.each(books, function(book) { %>
        <li><a href="books/by-title/<%= book.slug %>"><%= book.title %></a></li>
        <% }); %>
    </ul>
</main>
<footer></footer>

