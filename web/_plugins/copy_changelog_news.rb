# copy changelog and news to includes
FileUtils.cp '../InGameNews.md', '_includes/__news.md'
FileUtils.cp '../Changelog.md', '_includes/__changelog.md'

Jekyll::Hooks.register :site, :post_write do
    # after the site is generated, copy changelog and news media into it
    FileUtils.cp_r "../media/news", "_site/media"
    FileUtils.cp_r "../media/changelog", "_site/media"

    # also copy the raw markdown files for the in-game changelog/news viewers
    FileUtils.cp "_includes/__news.md", "_site/ingamenews/raw.md"
    FileUtils.cp "_includes/__changelog.md", "_site/changelog/raw.md"
end
