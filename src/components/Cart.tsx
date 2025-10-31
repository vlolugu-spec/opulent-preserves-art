import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();
  const [open, setOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-vintage-gold text-vintage-walnut text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-background border-l-2 border-vintage-gold-muted/30">
        <SheetHeader className="border-b border-vintage-gold-muted/30 pb-4">
          <SheetTitle className="font-display text-2xl text-vintage-cream flex items-center justify-between">
            Your Cart
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-vintage-gold"
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-12rem)]">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Your cart is empty
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card border border-border rounded-sm hover:border-vintage-gold-muted transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-sm"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-display font-semibold text-sm text-vintage-cream">
                            {item.title}
                          </h4>
                          <p className="text-xs text-vintage-gold-muted italic">{item.subtitle}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-vintage-gold-muted/30 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-vintage-gold-muted/20 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-semibold px-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-vintage-gold-muted/20 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-vintage-gold-muted/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm uppercase tracking-wider">Total Items:</span>
                  <span className="font-semibold text-vintage-gold">{totalItems}</span>
                </div>
                <Button
                  variant="vintage"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    setCheckoutOpen(true);
                  }}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>

      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-md bg-background border-2 border-vintage-gold-muted/30">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-vintage-cream">
              Complete Your Inquiry
            </DialogTitle>
          </DialogHeader>
          <CheckoutForm onClose={() => setCheckoutOpen(false)} />
        </DialogContent>
      </Dialog>
    </Sheet>
  );
};
