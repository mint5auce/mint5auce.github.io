# mint5auce.github.io

Pages/jekyll discovery

- Has to be a public repo to work

## Local development

Install the project Ruby with mise, then install the site dependencies:

```sh
mise install
mise exec -- bundle install
```

Run the GitHub Pages site locally with Jekyll and the Minimal Mistakes theme:

```sh
mise exec -- bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000/ to preview the site.
