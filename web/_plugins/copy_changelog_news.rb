# copy changelog and news to includes
FileUtils.cp '../InGameNews.md', '_includes/__news.md'
FileUtils.cp '../Changelog.md', '_includes/__changelog.md'

# after the site is generated, copy changelog and news media into it
Jekyll::Hooks.register :site, :post_write do
    FileUtils.cp_r "../media/news", "_site/media"
    FileUtils.cp_r "../media/changelog", "_site/media"
end
