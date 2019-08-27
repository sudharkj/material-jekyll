# material-jekyll

Project material-jekyll is a [Jekyll](https://jekyllrb.com/) theme supporting 
[Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/). 

The theme is built on an Ruby gem using free version of 
[MDB for jQuery](https://mdbootstrap.com/docs/jquery/)
for material design and [Jekyll](https://github.com/jekyll/jekyll) `3.8` plugin to generate
the static files with some customisations.

## Installation

1. Install all the gem dependencies [\[ref: bundler\]](https://bundler.io/man/bundle-install.1.html).
1. Start the server by running
    ```ruby
    bundle exec jekyll serve --host=0.0.0.0
    ```
   and open `http://0.0.0.0:4000/` in the browser to see the changes.

## Usage

1. Create an empty project for your site [\[ref: github\]](https://pages.github.com/).
1. Create `index.html` and set the layout. Also, put all the information on your site with [Variables](https://jekyllrb.com/docs/variables/)
following the **Configuration** section.
1. Add the following additional variable to `_config.yml` to use this remote theme. 
    ```yaml
    remote_theme: sudharkj/material-jekyll
    ```
1. Add any custom changes as suggested in **Development** based on the requirement.
1. Follow instructions in **Installation** to see your changes.

## Configuration

Following config variables are for the profile card on the landing page. 
Note that this is intended to show your profile in a short card.

| variable | value | description|
| --- | --- | --- |
| profile-link | publicly accessible link | image link to be shown above the profile image |
| profile-color | any bootstrap color | color to be shown in case profile-link is not provided |
| avatar-link | link to the profile photo | public link to the profile photo |
| name | name of the person | name of the person |
| title | title of the person | title of the person |
| caption | caption to be shown | caption to be shown to people |
| attachment-text | attachment text | attachment text |
| attachment-link | attachment link | publicly accessible link to the attachment |
| facebook | link to facebook profile | do not add it if not required |
| twitter | link to twitter profile | do not add it if not required |
| linkedin | link to linkedin profile | do not add it if not required |
| instagram | link to instagram profile | do not add it if not required |
| stack-overflow | link to stack-overflow profile | do not add it if not required |
| youtube | link to youtube profile | do not add it if not required |
| github | link to github profile | do not add it if not required |
| reddit | link to reddit profile | do not add it if not required |
| show-table-of-contents | true or false | whether to show table of contents |
| landing-page-order | comma with space separated list of markdown file names | markdown files showing various content is added and template takes care of formatting |

**Note:**
* Config values are loaded only once and so any config changes to the variables need server restart.
* Currently, specific dimensions are not set for profile-link and avatar-link. So, proper dimension images are to be added. 
* All referred links should be public.
* This is a base theme to support MDB in Jekyll pages. So, custom templates are allowed 
by creating [LAYOUT].html in `_includes` and referring that in layout in `index.html`.

## Development

1. Clone the repository [\[ref: github\]](https://help.github.com/en/articles/cloning-a-repository).
1. Make any changes to the local repository. 
1. Stash the files to git using the following command and 
follow the instructions in **Installation** to see the changes.
    ```text
    git add .
    ```

## Contributing

Bug reports and pull requests are welcome on GitHub at [sudharkj/material-jekyll](https://github.com/sudharkj/material-jekyll).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
