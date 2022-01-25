using System.Net;
using System.Text;
using System.Web;
using System.Xml.Linq;

namespace ConsoleApp1
{
    public class ShellModel
    {
        public HtmlString CssIncludes { get; set; }
        public HtmlString JavaScriptIncludes { get; set; }
        public HtmlString HeaderHtml { get; set; }
        public HtmlString FooterHtml { get; set; }
    }

    public class ShellServiceProvider
    {
        static string serviceEndpoint = "https://uhf.microsoft.com";
        static string partnerId = "MSMSRC";
        static string headerId = "MSMSRCHeader";
        static string footerId = "MSMSRCFooter";
        static string userAgent = "Microsoft";

        public static ShellModel Load(string locale)
        {
            string xml = string.Empty;
            using (var client = new WebClient())
            {
                var serviceUrl = serviceEndpoint +
                    "/" + locale + "/shell/xml/" + partnerId +
                    "?headerId=" + headerId +
                    "&footerId=" + footerId;
                client.Headers.Add("user-agent", userAgent);
                client.Encoding = Encoding.UTF8;
                xml = client.DownloadString(serviceUrl);
            }
            return ConvertXmlToModel(xml);
        }

        private static ShellModel ConvertXmlToModel(string xml)
        {
            var document = XDocument.Parse(xml);
            var root = document.Element("shell");
            return new ShellModel
            {
                CssIncludes = EnsureStringValue(root, "cssIncludes"),
                JavaScriptIncludes = EnsureStringValue(root, "javascriptIncludes"),
                FooterHtml = EnsureStringValue(root, "footerHtml"),
                HeaderHtml = EnsureStringValue(root, "headerHtml"),
            };
        }

        private static System.Web.HtmlString EnsureStringValue(XElement root, string elementName)
        {
            var element = root.Element(elementName);
            return new System.Web.HtmlString(element != null ? (string)element : string.Empty);
        }
    }
}