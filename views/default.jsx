const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Wizardsy</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <img src={logo} alt="https://www.flaticon.com/free-icons/wizard-hat" title="Wizardsy Logo"/>
                            <a class="navbar-brand" href="#">Home</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="navbar-brand" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="navbar-brand" href="#">Today</a>
                                </li>
                                <li class="nav-item">
                                    <a class="navbar-brand" href="#" role="button" aria-expanded="false">
                                    Create
                                    </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Today</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider"/></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                </li>
                            </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def