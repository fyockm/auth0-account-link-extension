import adminJS from '../../public/admin';

export default ({stylesheetTag, baseURL}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base href="${baseURL}"/>
    <title>Auth0 Account Linking Extension Administrator</title>
    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/theme/material.min.css">
    ${stylesheetTag}
</head>
<body>

<header class="site-header">
 <nav class="navbar navbar-default" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        </button>
        <span>
            <h1 class="navbar-brand"><a href="/"><span>Auth0</span> <div class="product-name">Account Linking Extension</div></a></h1>
        </span>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse">
        <ul class="nav navbar-nav navbar-left no-basic">
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown"><span class="btn-dro" role="button" data-toggle="dropdown">
            <img src="" alt="" class="avatar">
            <i class="icon-budicon-460"></i></span>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
              <li><a href="https://github.com/auth0-extensions/auth0-account-link-extension/issues/new" target="_blank">Report an issue</a></li>
              <li class="separator"></li>
              <li><a href="#" id="logout-btn">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<section class="loading-state-container">
  <div class="spinner spinner-lg is-auth0">
    <div class="circle"></div>
  </div>
</section>

<main class="container app-container">
    <form action="">
      <h2>Custom Hosted Page</h2>

      <textarea name="html-code" id="code-editor"></textarea>

      <h2>Widget Settings</h2>

      <div class="alert" id="save-result">
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input name="title" class="form-control" id="title_input" />
      </div>

      <div class="form-group">
        <label for="logo_path">Logo Path</label>
        <input name="logo_path" class="form-control" id="logo_path_input"/>
      </div>

      <div class="form-group">
        <label for="color">Color</label>
        <input name="color" class="form-control" id="color_input"/>
      </div>

      <div class="form-group">
        <label for="locale">Language</label>
        <select name="locale" class="form-control" id="available-locales"></select>
      </div>

      <div class="form-group">
        <input type="checkbox" id="remove_overlay"/> Remove widget's overlay
      </div>

      <button class="btn btn-success" id="save-changes">Save changes</button>
    </form>
</main>


<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/mode/xml/xml.js"></script>
<script>(${adminJS.toString()})()</script>
</body>
</html>
`;
