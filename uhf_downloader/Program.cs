using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ShellModel shell = ShellServiceProvider.Load("en-us");

            string partialsDirectory = @"C:\repos\MsftBlog\themes\microsoft\layouts\partials";
            string cssFile = Path.Combine(partialsDirectory, "uhf_css.html");
            string footerFile = Path.Combine(partialsDirectory, "uhf_footer.html");
            string headerFile = Path.Combine(partialsDirectory, "uhf_header.html");
            string javascriptFile = Path.Combine(partialsDirectory, "uhf_javascript.html");

            File.WriteAllText(cssFile, shell.CssIncludes.ToString());
            File.WriteAllText(footerFile, shell.FooterHtml.ToString());
            File.WriteAllText(headerFile, shell.HeaderHtml.ToString());
            File.WriteAllText(javascriptFile, shell.JavaScriptIncludes.ToString());

        }
    }
}
