import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SermonGenerator = () => {
  const [topic, setTopic] = useState("");
  const [scripture, setScripture] = useState("");
  const [generatedSermon, setGeneratedSermon] = useState("");
  const { toast } = useToast();

  const handleGenerate = () => {
    // Mock generation
    setGeneratedSermon(
      `# Sermon on ${topic || "Faith"}\n\n## Scripture: ${scripture || "John 3:16"}\n\n### Introduction\nThis is a demo sermon. In production, AI would generate a complete, personalized sermon based on your topic, scripture references, and preaching style.\n\n### Main Points\n1. Point One\n2. Point Two\n3. Point Three\n\n### Conclusion\nA powerful closing message that ties everything together.`
    );
    toast({
      title: "Sermon Generated!",
      description: "Your sermon has been created successfully.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "File Uploaded",
        description: "In production, AI would analyze and enhance your sermon.",
      });
    }
  };

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Sermon Generator</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate New</TabsTrigger>
            <TabsTrigger value="enhance">Enhance Existing</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="space-y-6">
            <div className="gradient-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Sermon Topic</Label>
                  <Input
                    id="topic"
                    placeholder="e.g., The Power of Faith"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scripture">Scripture Reference</Label>
                  <Input
                    id="scripture"
                    placeholder="e.g., John 3:16"
                    value={scripture}
                    onChange={(e) => setScripture(e.target.value)}
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Sermon
                </Button>
              </div>
            </div>

            {generatedSermon && (
              <div className="gradient-card rounded-2xl p-6 shadow-soft border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Generated Sermon</h3>
                <Textarea
                  value={generatedSermon}
                  onChange={(e) => setGeneratedSermon(e.target.value)}
                  className="min-h-[400px] font-mono"
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="enhance" className="space-y-6">
            <div className="gradient-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="file">Upload Sermon PDF</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="flex-1"
                    />
                    <Button className="bg-accent hover:bg-accent-dark text-white">
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Upload your existing sermon and AI will help enhance and refine it
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SermonGenerator;
