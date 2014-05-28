<header></header>
<main id="main" role="main">
    <h2>
        <% if (url) { %><a href="<%= url %>"><% } %>
        <%= title %>
        <% if (url) { %></a><% } %>
    </h2>
    <% if (authors.length) { %>
    <h4>by
        <% _.each(authors, function(author, i, l) { %>
        <a href="books/by-author/<%= author.slug %>"><%= author.listName %></a><% if (i === l.length - 2) { %> and
            <% } else if (i < l.length - 2) { %>,
            <% } %>
        <% }); %>
    </h4>
    <% } %>
    <% if (editors.length) { %>
    <h4>edited by
        <% _.each(editors, function(editor, i, l) { %>
        <a href="books/by-author/<%= editor.slug %>"><%= editor.listName %></a><% if (i === l.length - 2) { %> and
            <% } else if (i < l.length - 2) { %>,
            <% } %>
        <% }); %>
    </h4>
    <% } %>
</main>
<footer></footer>

