import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Edit2, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedNotes = localStorage.getItem("preachbro-notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const saveToLocalStorage = (updatedNotes: Note[]) => {
    localStorage.setItem("preachbro-notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  const handleCreateNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      toast({
        title: "Missing information",
        description: "Please add both title and content",
        variant: "destructive",
      });
      return;
    }

    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title,
      content: newNote.content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedNotes = [note, ...notes];
    saveToLocalStorage(updatedNotes);
    setNewNote({ title: "", content: "" });
    setIsCreating(false);
    toast({
      title: "Note created",
      description: "Your note has been saved successfully",
    });
  };

  const handleUpdateNote = () => {
    if (!editingNote) return;

    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id
        ? { ...editingNote, updatedAt: new Date().toISOString() }
        : note
    );
    saveToLocalStorage(updatedNotes);
    setEditingNote(null);
    toast({
      title: "Note updated",
      description: "Your changes have been saved",
    });
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveToLocalStorage(updatedNotes);
    toast({
      title: "Note deleted",
      description: "The note has been removed",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold">Personal Notes</h1>
            </div>
            <Button
              onClick={() => setIsCreating(true)}
              className="gap-2"
              size="sm"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Note</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-5xl">
        {/* Create/Edit Form */}
        {(isCreating || editingNote) && (
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">
                {isCreating ? "Create New Note" : "Edit Note"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Note title..."
                value={isCreating ? newNote.title : editingNote?.title || ""}
                onChange={(e) =>
                  isCreating
                    ? setNewNote({ ...newNote, title: e.target.value })
                    : setEditingNote(
                        editingNote
                          ? { ...editingNote, title: e.target.value }
                          : null
                      )
                }
              />
              <Textarea
                placeholder="Write your note here..."
                value={isCreating ? newNote.content : editingNote?.content || ""}
                onChange={(e) =>
                  isCreating
                    ? setNewNote({ ...newNote, content: e.target.value })
                    : setEditingNote(
                        editingNote
                          ? { ...editingNote, content: e.target.value }
                          : null
                      )
                }
                rows={6}
              />
              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsCreating(false);
                    setEditingNote(null);
                    setNewNote({ title: "", content: "" });
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={isCreating ? handleCreateNote : handleUpdateNote}
                  className="gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notes List */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">
                  No notes yet. Create your first note to get started!
                </p>
                <Button onClick={() => setIsCreating(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Note
                </Button>
              </CardContent>
            </Card>
          ) : (
            notes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg sm:text-xl truncate">
                        {note.title}
                      </CardTitle>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {new Date(note.updatedAt).toLocaleDateString()} at{" "}
                        {new Date(note.updatedAt).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="flex gap-1 sm:gap-2 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingNote(note)}
                        className="h-8 w-8 sm:h-9 sm:w-9"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteNote(note.id)}
                        className="h-8 w-8 sm:h-9 sm:w-9 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base whitespace-pre-wrap">
                    {note.content}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
